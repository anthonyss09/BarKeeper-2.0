import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
  }),

  tagTypes: ["Recipe"],

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: ({ firstName, lastName, email, password }) => ({
        url: "/auth/register",
        method: "POST",
        body: { firstName, lastName, email, password },
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
    createRecipe: builder.mutation({
      query: ({ name, ingredients, instructions, createdBy, recipeId }) => ({
        url: "/recipes/create-recipe",
        method: "POST",
        body: { name, ingredients, instructions, createdBy, recipeId },
      }),
      invalidatesTags: ["Recipe"],
    }),
    getAllRecipes: builder.query({
      query: ({ createdBy, sort, searchQuery, pageNumber }) =>
        `/recipes/all-recipes/${createdBy}?sort=${sort}&searchQuery=${searchQuery}&pageNumber=${pageNumber}`,
      providesTags: ["Recipe"],
    }),
    getRecipe: builder.query({
      query: (recipeId) => `/recipes/single-recipe/${recipeId}`,
    }),
    deleteRecipe: builder.mutation({
      query: ({ recipeId }) => ({
        url: "/recipes/delete-recipe",
        method: "POST",
        body: { recipeId },
      }),
      invalidatesTags: ["Recipe"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useCreateRecipeMutation,
  useGetAllRecipesQuery,
  useGetRecipeQuery,
  useDeleteRecipeMutation,
} = apiSlice;
