import mongoose, { Schema } from "mongoose";

const ProductSchema: Schema = new Schema({});

export default mongoose.model("Product", ProductSchema);
