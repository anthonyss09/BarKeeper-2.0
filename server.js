import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import connectDb from "./Db/connect.js";
import authRoutes from "./routes/authRoutes.js";
import recipesRoutes from "./routes/recipeRoutes.js";

app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipesRoutes);

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Welcome to Barkeeper");
});

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
