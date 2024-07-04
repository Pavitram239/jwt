import { StatusCodes, ReasonPhrases } from "http-status-codes";

export class NotFoundError extends Error {
  constructor() {
    super();
    this.name = "NotFoundError";
    this.statusCode = StatusCodes.NOT_FOUND;
    this.message = ReasonPhrases.NOT_FOUND;
  }
}

export class BadRequestError extends Error {
  constructor() {
    super();
    this.name = "BadRequestError";
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.message = ReasonPhrases.BAD_REQUEST;
  }
}

export class UnauthorizedError extends Error {
  constructor() {
    super();
    this.name = "UnAuthorizedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
    this.message = StatusCodes.UNAUTHORIZED;
  }
}

export class UnauthenticatedError extends Error {
  constructor() {
    super();
    this.name = "UnauthenticatedError";
    this.statusCode = StatusCodes.FORBIDDEN;
    this.message = ReasonPhrases.FORBIDDEN;
  }
}

export class InternalServerError extends Error {
  constructor() {
    super();
    this.name = "InternalServerError";
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    this.message = ReasonPhrases.INTERNAL_SERVER_ERROR;
  }
}
