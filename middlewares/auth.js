import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import User from "../models/user.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const isValidUser = async (req, res, next) => {
  try {
    if (!req.headers.cookie) throw new UnauthenticatedError();
    const token = req.headers.cookie.slice(6);
    if (!token) throw new UnauthenticatedError();
    const decoded = await verifyJWT(token);
    const userExists = await User.exists({ _id: decoded.userId });
    if (!userExists) throw new UnauthenticatedError();
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    if (!req.user.isAdmin) throw new UnauthenticatedError("unauthorized");
    next();
  } catch (error) {
    next(error);
  }
};
