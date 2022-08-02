import mongoose, { Schema } from "mongoose";

const VendorPriceSchema: Schema = new Schema({
  vendorID: mongoose.Types.ObjectId,
  price: String,
});

export default mongoose.model("VendorPrice", VendorPriceSchema);
