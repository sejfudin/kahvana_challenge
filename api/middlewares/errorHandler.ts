import { Request, Response, NextFunction } from "express";

const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.status || 500);
  res.send({ error: true, message: error.message || "Internal Server Error" });
};

export default errorHandler;
