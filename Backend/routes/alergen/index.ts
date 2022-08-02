import express, { Request, Response } from "express";
import Alergen from "../../Model Schemas/Alergen";
import { getAlergenByID, getAllAlergens, postAlergen } from "./functions";

const router = express.Router();

router.get("/:id", getAlergenByID);

router.get("/", getAllAlergens);

router.post("/", postAlergen);

router.post("/", async (req: Request, res: Response) => {
  try {
    const data = await Alergen.find();
    res.json(data);
  } catch (err) {}
});

router.delete("/", async (req: Request, res: Response) => {
  try {
    const data = await Alergen.find();
    res.json(data);
  } catch (err) {}
});
