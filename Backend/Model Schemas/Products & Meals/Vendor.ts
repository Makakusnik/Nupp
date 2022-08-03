import mongoose, { Schema } from "mongoose";

const VendorSchema: Schema = new Schema({
  name: String,
  url: String,
});

export default mongoose.model("Vendor", VendorSchema);
