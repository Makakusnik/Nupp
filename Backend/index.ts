import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth/index.js";
import alergenRouter from "./routes/data/alergen/index.js";
import categoryRouter from "./routes/data/category/index.js";
import brandRouter from "./routes/data/brand/index.js";
import foodAdditiveRouter from "./routes/data/foodAdditive/index.js";
import markRouter from "./routes/data/mark/index.js";
import mealRouter from "./routes/data/meal/index.js";
import productRouter from "./routes/data/product/index.js";
import vendorRouter from "./routes/data/vendor/index.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const URL: string = process.env.URL!;

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/data/alergen", alergenRouter);
app.use("/api/data/category", categoryRouter);
app.use("/api/data/brand", brandRouter);
app.use("/api/data/food_additive", foodAdditiveRouter);
app.use("/api/data/mark", markRouter);
app.use("/api/data/meal", mealRouter);
app.use("/api/data/product", productRouter);
app.use("/api/data/vendor", vendorRouter);

mongoose
  .connect(URL)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });

    app.get("/", (req: Request, res: Response) => {
      res.send("Connected to mongdob");
    });
  })
  .catch((err) => {
    console.log(err);
  });
