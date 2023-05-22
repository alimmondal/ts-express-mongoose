import { Router } from "express";
import {
  createProducts,
  getAllProducts,
  getProductById,
} from "./product.controller";

const router: Router = Router();

router.get("/allProducts", getAllProducts);
router.post("/create-product", createProducts);
router.get("/details/:id", getProductById);

export default router;
