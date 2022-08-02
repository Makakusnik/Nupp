import mongoose, { Schema } from "mongoose";

const IngredientSchema: Schema = new Schema({
  productID: mongoose.Types.ObjectId,
  weight: Number,
});

export default mongoose.model("Ingredient", IngredientSchema);
