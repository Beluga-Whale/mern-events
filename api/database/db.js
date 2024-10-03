import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(chalk.magenta(`${conn.connection.host}`));
  } catch (error) {
    console.log(chalk.red(err));
    process.exit(1);
  }
};

export default connectDB;
