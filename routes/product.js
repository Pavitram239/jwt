import express from "express";
import { addProduct, getProducts } from "../controllers/product.js";
import { isAdmin, isValidUser } from "../middlewares/auth.js";
const router = express.Router();

router.route("/").all(isValidUser).get(getProducts).post(isAdmin, addProduct);

export default router;
