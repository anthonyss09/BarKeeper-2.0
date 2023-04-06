import { StatusCodes } from "http-status-codes";
import "express-async-errors";
import { BadRequestError, UnauthenticatedError } from "../Errors/index.js";
import Recipe from "../models/recipe.js";

const createRecipe = async (req, res) => {
  const { name, ingredients, instructions, createdBy, recipeId } = req.body;

  if (!name) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Please provide recipe name." });
    throw new BadRequestError("Please provide recipe name.");
  }

  const recipeExists = await Recipe.findOne({ _id: recipeId });

  if (recipeExists) {
    try {
      const updatedRecipe = await Recipe.updateOne(
        { _id: recipeId },
        { name, ingredients, instructions }
      );
      res.status(StatusCodes.OK).json(updatedRecipe);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).json({ error });
    }
    return;
  }

  try {
    const recipe = await Recipe.create({
      name,
      ingredients,
      instructions,
      createdBy,
    });

    res.status(StatusCodes.CREATED).json(recipe);
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

const getRecipes = async (req, res) => {
  const { id } = req.params;
  const { sort, searchQuery, pageNumber } = req.query;
  const queryObject = {
    createdBy: id,
  };
  if (searchQuery.length) {
    queryObject.name = { $regex: searchQuery, $options: "i" };
  }

  try {
    const allRecipes = await Recipe.find(queryObject);
    const numOfPages = Math.ceil(allRecipes.length / 12);
    let recipes;
    if (sort === "a-z") {
      recipes = await Recipe.find(queryObject)
        .sort({
          name: 1,
        })
        .skip(pageNumber > 0 ? (pageNumber - 1) * 12 : 0)
        .limit(12);
    }
    if (sort === "z-a") {
      recipes = await Recipe.find(queryObject)
        .sort({
          name: -1,
        })
        .skip(pageNumber > 0 ? (pageNumber - 1) * 12 : 0)
        .limit(12);
    }
    if (sort === "newest") {
      recipes = await Recipe.find(queryObject)
        .sort({
          createdAt: 1,
        })
        .skip(pageNumber > 0 ? (pageNumber - 1) * 12 : 0)
        .limit(12);
    }
    if (sort === "oldest") {
      recipes = await Recipe.find(queryObject)
        .sort({
          createdAt: -1,
        })
        .skip(pageNumber > 0 ? (pageNumber - 1) * 12 : 0)
        .limit(12);
    }

    res.status(StatusCodes.OK).send({ recipes, numOfPages });
  } catch (error) {
    console.log(error);
  }
};

const getRecipe = async (req, res) => {
  const { id: recipeId } = req.params;

  try {
    const recipe = await Recipe.findOne({ _id: recipeId });
    res.status(StatusCodes.OK).send(recipe);
  } catch (error) {
    console.log(error);
  }
};

const deletRecipe = async (req, res) => {
  const { recipeId } = req.body;

  try {
    await Recipe.findOneAndDelete({ _id: recipeId });
    res.status(StatusCodes.OK).json({ msg: "recipe deleted" });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};

export { createRecipe, getRecipes, getRecipe, deletRecipe };
