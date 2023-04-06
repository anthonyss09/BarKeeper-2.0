import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
// import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const emailInUse = await User.findOne({ email });
    if (emailInUse) {
      throw new BadRequestError("Email already in use.");
    }
    if (!firstName || !lastName || !email || !password) {
      throw new BadRequestError("Please provide all values.");
    }
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });
    user.password = undefined;
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new BadRequestError("Please provide all Values");
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      throw new UnauthenticatedError("Invalid credentials.");
    }
    const passwordAuthorized = await user.comparePassword(password);
    if (!passwordAuthorized) {
      throw new UnauthenticatedError("Invalid credentials.");
    }
    user.password = undefined;
    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
  }
};

export { registerUser, loginUser };
