import { NotFoundError } from "../errors/customErrors.js";

const notFoundMiddleWare = (req, res, next) => {
  next(new NotFoundError());
};

export default notFoundMiddleWare;
