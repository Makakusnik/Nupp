import { Request, Response } from "express";
import Alergen from "../../Model Schemas/Products & Meals/Alergen";

export const getAlergenByID = async (req: Request, res: Response) => {
  try {
    const data = await Alergen.findById(req.params.id);
    res.json(data);
  } catch (err) {}
};

export const getAllAlergens = async (req: Request, res: Response) => {
  try {
    const data = await Alergen.find();
    res.json(data);
  } catch (err) {}
};

export const postAlergen = async (req: Request, res: Response) => {
  const alergen = new Alergen({
    name: req.body.name,
  });
  try {
    const newAlergen = await alergen.save();
    res.json(newAlergen);
  } catch (err) {}
};
