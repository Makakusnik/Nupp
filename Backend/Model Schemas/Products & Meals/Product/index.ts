import mongoose, { Schema } from "mongoose";
import VendorPrice from "../VendorPrice";

const ProductSchema: Schema = new Schema({
  name: String,
  brandID: mongoose.Types.ObjectId,
  packingWeight: Number,
  markIDs: [mongoose.Types.ObjectId],
  foodAdditiveIDs: [mongoose.Types.ObjectId],
  vendorAndPrice: [VendorPrice],
  alergenIDs: [mongoose.Types.ObjectId],
  categoryIDs: [mongoose.Types.ObjectId],
  energy: Number,
  fats: Number,
  saturatedFattyAcids: Number,
  monoUnsaturatedFattyAcids: Number,
  polyUnsaturatedFattyAcids: Number,
  proteins: Number,
  carbohydrates: Number,
  sugar: Number,
  fiber: Number,
  salt: Number,
});

export default mongoose.model("Product", ProductSchema);
