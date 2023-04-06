import express from "express";
const router = express.Router();
import {
  createRecipe,
  getRecipes,
  getRecipe,
  deletRecipe,
} from "../controllers/recipesController.js";

router.route("/create-recipe").post(createRecipe);
router.route("/all-recipes/:id").get(getRecipes);
router.route("/single-recipe/:id").get(getRecipe);
router.route("/delete-recipe").post(deletRecipe);

export default router;
