import express from "express";
import { addUser, getUsers } from "../controllers/user.js";
import { isAdmin, isValidUser } from "../middlewares/auth.js";
const router = express.Router();

router.route("/").all(isValidUser, isAdmin).get(getUsers).post(addUser);

export default router;
