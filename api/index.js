import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import chalk from "chalk";

dotenv.config();

connectDB();

const app = express();

app.listen(3000, () => {
  console.log(chalk.blue.bgGreen.bold("Server is running on port 3000"));
});
