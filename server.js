import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import connectDb from "./Db/connect.js";
import authRoutes from "./routes/authRoutes.js";
import recipesRoutes from "./routes/recipeRoutes.js";

app.use(express.json());

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

// Accessing the path module
import path from "path";
// import client build
const __dirname = path.dirname(__filename);

//routes
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipesRoutes);

app.use(express.static(path.join(__dirname, "./client/build")));
// redirect requests to index.html
app.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "./client/build", "index.html"));
});

app.get("/", (req, res) => {
  res.send("Welcome to Barkeeper");
});

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`App is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
