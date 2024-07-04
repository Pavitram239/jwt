import { StatusCodes } from "http-status-codes";

const errorHandler = (err, req, res, next) => {
  const error = {
    name: err.name || "UnknownError",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something Went Wrong",
  };

  res.status(error.statusCode).json(error);
};

export default errorHandler;
