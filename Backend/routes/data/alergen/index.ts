import express, { Request, Response } from "express";
import { getAlergenByID, getAllAlergens, postAlergen } from "./functions.js";

const router = express.Router();

router.get("/:id", getAlergenByID);

router.get("/", getAllAlergens);

router.post("/", postAlergen);

export default router;
