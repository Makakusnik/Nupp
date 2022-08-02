import mongoose, { Schema } from "mongoose";

const BrandSchema: Schema = new Schema({
  name: String,
  url: String,
});

export default mongoose.model("Brand", BrandSchema);
