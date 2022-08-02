import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

mongoose
  .connect(
    "mongodb+srv://marekfodor:eUAzWKqEbASkcIastZ@cluster0.fkjqtp6.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.get("/", (req: Request, res: Response) => {
      res.send("Connected to mongdob");
    });

    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch(() => {
    app.get("/", (req: Request, res: Response) => {
      res.send("Failed to connect");
    });
  });
