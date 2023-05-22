import cors from "cors";
import "dotenv/config";
import express, { Application } from "express";
import dbConnect from "./app/utils/dbConnect";

const app: Application = express();

app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// render ejs

dbConnect();
app.set("view engine", "ejs");

// all import routes here
import productRoute from "./app/modules/Product/product.router";

// default routes
app.get("/", (req, res) => {
  res.render("index");
});
// custom routes
app.use("/api/v1/products", productRoute);

export { app };
