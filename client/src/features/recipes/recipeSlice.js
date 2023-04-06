import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const recipeAdapter = createEntityAdapter({
  slectId: (recipe) => recipe._id,
});

const initialState = recipeAdapter.getInitialState({
  name: "",
  ingredients: ["", "", ""],
  instructions: "",
  isEditPage: false,
  columnDisplay: true,
});

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addIngredient(state, action) {
      state.ingredients[action.payload.index] = action.payload.ingredient;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setInstructions(state, action) {
      state.instructions = action.payload;
    },
    addInput(state, action) {
      state.ingredients.push("");
    },
    removeIngredient(state, action) {
      const index = action.payload.index;
      const newIngredients = state.ingredients.slice();
      newIngredients.splice(index, 1);
      state.ingredients = newIngredients;
    },
    clearValues(state, action) {
      state.name = "";
      state.ingredients = ["", "", ""];
      state.instructions = "";
    },
    setColumnDisplay(state, action) {
      state.columnDisplay = action.payload;
    },
  },
});

export const { selectAll: selectAllRecipes } = recipeAdapter.getSelectors(
  (state) => state.recipes
);

export const selectIngredients = (state) => state.recipes.ingredients;

export const selectName = (state) => state.recipes.name;

export const selectInstructions = (state) => state.recipes.instructions;

export const selectColumnDisplay = (state) => state.recipes.columnDisplay;

export const {
  addIngredient,
  addInput,
  removeIngredient,
  setName,
  setInstructions,
  clearValues,
  setColumnDisplay,
} = recipeSlice.actions;

export default recipeSlice.reducer;
