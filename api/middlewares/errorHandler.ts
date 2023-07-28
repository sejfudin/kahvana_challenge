import { Request, Response, NextFunction } from "express";
import { CustomError } from "../utils/interfaces";

const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.status || 500);
  res.send({ error: true, message: error.message || "Internal Server Error" });
};

export default errorHandler;
