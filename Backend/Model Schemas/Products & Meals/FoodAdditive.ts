import mongoose, { Schema } from "mongoose";

const FoodAdditiveSchema: Schema = new Schema({
  name: String,
  harmfulness: Number,
  code: String,
});

export default mongoose.model("FoodAdditive", FoodAdditiveSchema);
