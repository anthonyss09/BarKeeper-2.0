import mongoose from "mongoose";

export const IngredientSchema = new mongoose.Schema({
  count: {
    type: Number,
  },
  ingredient: {
    type: String,
  },
});

export default mongoose.model("Ingredient", IngredientSchema);
