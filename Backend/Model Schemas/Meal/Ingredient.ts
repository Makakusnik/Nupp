import mongoose, { Schema } from "mongoose";

export const IngredientSchema: Schema = new Schema({
  productID: mongoose.Types.ObjectId,
  weight: Number,
});
