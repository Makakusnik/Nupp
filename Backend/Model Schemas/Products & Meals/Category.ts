import mongoose, { Schema } from "mongoose";

const CategorySchema: Schema = new Schema({
  name: String,
});

export default mongoose.model("Category", CategorySchema);
