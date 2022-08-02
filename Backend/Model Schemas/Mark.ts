import mongoose, { Schema } from "mongoose";

const MarkSchema: Schema = new Schema({
  name: String,
  text: String,
  type: EffectType,
});

export default mongoose.model("Mark", MarkSchema);
