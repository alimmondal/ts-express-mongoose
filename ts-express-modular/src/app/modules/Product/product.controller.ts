import { NextFunction, Request, Response } from "express";
import { sendApiResponse } from "../../utils/responseHandler";
import {
  createProductsToDb,
  getAllProductsFromDb,
  getProductByIdFromDb,
} from "./product.service";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await getAllProductsFromDb();
  // res.send(products);
  sendApiResponse(res, 200, true, products);
};

export const createProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const products = await createProductsToDb(data);
  // res.send(products);
  sendApiResponse(res, 200, true, products);
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const product = await getProductByIdFromDb(id);
  // res.send(product);
  sendApiResponse(res, 200, true, product);
};
