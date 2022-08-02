import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const port = process.env.PORT;
mongoose
    .connect("mongodb+srv://marekfodor:eUAzWKqEbASkcIastZ@cluster0.fkjqtp6.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
    app.get("/", (req, res) => {
        res.send("Connected to mongdob");
    });
    app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
    });
})
    .catch(() => {
    app.get("/", (req, res) => {
        res.send("Failed to connect");
    });
});
