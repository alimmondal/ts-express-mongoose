import { IProduct } from "./product.interface";
import { Product } from "./product.model";

export const createProductsToDb = async (
  payload: IProduct
): Promise<IProduct> => {
  const product = new Product(payload);
  await product.save();
  return product;
};

export const getAllProductsFromDb = async (): Promise<IProduct[]> => {
  return Product.find();
};

export const getProductByIdFromDb = async (id: string): Promise<IProduct[]> => {
  return Product.find({ _id: id });
};
