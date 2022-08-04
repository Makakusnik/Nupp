import mongoose from "mongoose";

const AlergenSchema: mongoose.Schema = new mongoose.Schema({
  name: String,
});

export default mongoose.model("Alergen", AlergenSchema);
