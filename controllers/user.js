import User from "../models/user.js";
import { NotFoundError } from "../errors/customErrors.js";
import { StatusCodes } from "http-status-codes";
import user from "../models/user.js";
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (users.length === 0) throw new NotFoundError();
    res.status(StatusCodes.OK).json(users);
  } catch (error) {
    next(error);
  }
};

export const addUser = async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body.admin === "true") req.body.isAdmin = true;
    delete req.body.admin;
    req.body.password = "secret1234";
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "user created " });
  } catch (error) {
    next(error);
  }
};

// export const getCurrentUser = async (req, res, next) => {
//   try {
//     const user = await User.findById();
//   } catch (error) {}
// };
