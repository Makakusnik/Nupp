import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const URL: string = process.env.URL!;

mongoose
  .connect(URL)
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
