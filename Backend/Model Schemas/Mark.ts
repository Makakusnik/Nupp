import mongoose, { Schema } from "mongoose";

const MarkSchema: Schema = new Schema({
  name: String,
  text: String,
  type: { type: String, enum: ["healthy", "harmful", "neutral"] },
});

export default mongoose.model("Mark", MarkSchema);
