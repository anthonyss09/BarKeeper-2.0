## :tropical_drink: Bar-keeper-2.0 :tropical_drink:

Bar keeper is a MERN stack app featuring redux and redux toolkit. Users can create, store, and edit bar recipes.

![landingPage](/client/src/assets/images/landing.jpg)

# Description

Bar keeper's front end is written with React and state is managed with redux and redux toolkit (rtk). All fetching is done with rtk query. Rtk query fetches, updates and caches data avoiding redundant ajax requests and hand written request logic. Editing user information invalidates data and forces refetching of data for on the fly updates.

Bar keeper's backend api server is written on nodeJs with express. Routes are created with express.router and controller functions are passed into routes in Routes folder.
The object data modelling library Mongoose is used to create model structures and connect with mongo data base.

![bigSideBar](/client/src/assets/images/bigSideBar.jpg)

# Features

## creating & editing recipes

`useCreateRecipeMutation` is an endpoint in [apiSlice](/client/src/features/api/apiSlice.js). `useCreateRecipeMutation` sends an update to server thanks the query addon from redux toolkit.
Query supports data fetching and data caching which Bar keeper takes advantage of by invalidating tags and updating data on the fly.

![createRecipe](/client/src/assets/images/createForm.png)

## customizable display

Bar keeper has clickable options to display data in rows or grid pattern. `columnDisplay` is an initial state value in [recipeSlice](/client/src/features/recipes/recipeSlice.js). `columnDisplay` is a boolean value passed to componenets with `useSelector` and is set using the reducer `setColumnDisplay`. `columnDisplay` is the condition used to set class names of elements in effect applying grid or row display style rules.

![gridDisplay](/client/src/assets/images/gridDisplay.png)

![rowDisplay](/client/src/assets/images/rowsDisplay.png)

## search bar

A search bar is implemented in [taskBar](/client/src/components/TaskBar.js). Search bar input globally sets `searchQuery` which is in the dependancy array of the `useEffect` hook existing in the `taskBars` parent component [allRecipes](/client/src/features/recipes/AllRecipes.js). The `useEffect` hook is triggered on search bar change and forces refetching of data this time with a new `searchQuery`. The `searchQuery` is a query parameter passed to the [recipeController](/controllers/recipesController.js) on the express server and uses $regex to match string patterns on the mongoDB.

## data sorting options

`sort` is one of the query parameters sent to `getRecipes` in [recipeController](/controllers/recipesController.js). `sort` is also listed in the `useEffect` dependancy array in [allRecipes](/client/src/features/recipes/AllRecipes.js) where on change a refetch is triggered with the updated `sort` parameter. The `sort` query parameter is recieved on the backend and is used to conditionally determine how server sorts data recieved from mongoDb.

## pagination

`pageNumber` is the last query parameter sent
to [recipeController](/controllers/recipesController.js). The data recieved from mongoDb is then refined using the .limit() and .skip() methods attached to mongoose models. `pageNumber` is a local state value in [allRecipes](/client/src/features/recipes/AllRecipes.js) and is set with onClick fuctions passed into the [paginationComponent](/client/src/components/Pagination.js).

# installation

- Have use of some code editor e.g. VSC code or atom.
- clone git repository
- copy the following url open up your terminal and execute following command

https://github.com/anthonyss09/BarKeeper-2.0.git

`$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

- install packages

`npm install`
