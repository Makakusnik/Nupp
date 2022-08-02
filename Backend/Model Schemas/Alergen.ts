import mongoose, { Schema } from "mongoose";

const AlergenSchema: Schema = new Schema({
  name: String,
});

export default mongoose.model("Alergen", AlergenSchema);
