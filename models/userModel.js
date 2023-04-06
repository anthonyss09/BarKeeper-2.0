import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";
import { RecipeSchema } from "./recipe.js";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide first name."],
  },
  lastName: {
    type: String,
    required: [true, "Please provide last name."],
  },
  email: {
    type: String,
    required: [true, "Please provide email."],
    validate: {
      validator: validator.isEmail,
      message: "Please provide valid email.",
      unique: true,
    },
  },
  password: {
    type: String,
    required: [true, "Please provide password."],
    minlength: 6,
    select: false,
  },
  // recipes: [RecipeSchema],
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export default mongoose.model("User", UserSchema);
