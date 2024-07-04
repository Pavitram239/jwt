import { StatusCodes } from "http-status-codes";
import { InternalServerError, NotFoundError } from "../errors/customErrors.js";
import Product from "../models/product.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    if (!products) throw new NotFoundError();
    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "Product added" });
  } catch (error) {
    next(error);
  }
};
