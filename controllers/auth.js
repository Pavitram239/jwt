import {
  InternalServerError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/customErrors.js";
import User from "../models/user.js";
import { createJWT } from "../utils/tokenUtils.js";
import { StatusCodes } from "http-status-codes";

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) throw new NotFoundError("user not found");
    const isValidUser = await user.comparePassword(req.body.password);
    console.log(isValidUser);
    if (!isValidUser) throw new UnauthenticatedError();
    console.log(process.env.JWT_EXPIRES_IN);
    const token = createJWT({
      userId: user._id,
      isAdmin: user.isAdmin,
      name: user.name,
    });

    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      // secure: process.env.NODE_ENV === "production",
    });
    res.status(StatusCodes.OK).json({ msg: "User logged in" });
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res) => {
  try {
    req.body.isAdmin = (await User.countDocuments({})) === 0;
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "user created" });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(StatusCodes.OK).json({ msg: "User logged out" });
};
