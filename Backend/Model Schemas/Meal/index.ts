import mongoose, { Schema } from "mongoose";

const MealSchema: Schema = new Schema({});

export default mongoose.model("Meal", MealSchema);
