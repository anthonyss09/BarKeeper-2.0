import mongoose from "mongoose";
import { IngredientSchema } from "./ingredient.js";

export const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name."],
  },
  ingredients: [String],
  instructions: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: null,
  },
});

export default mongoose.model("Recipe", RecipeSchema);
