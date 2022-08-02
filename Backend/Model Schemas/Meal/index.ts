import mongoose, { Schema } from "mongoose";
import { IngredientSchema } from "./Ingredient";

const MealSchema: Schema = new Schema({
  name: String,
  brandID: mongoose.Types.ObjectId,
  packingWeight: Number,
  markIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mark" }],
  foodAdditiveIDs: [
    { type: mongoose.Schema.Types.ObjectId, ref: "FoodAdditive" },
  ],
  alergenIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Alergen" }],
  categoryIDs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  ingredients: IngredientSchema,
});

export default mongoose.model("Meal", MealSchema);
