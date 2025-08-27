import mongoose from "mongoose";
import { config } from "./env.ts";

// Load environment variables from .env file

const connectDB = async () => {
  try {
    const MONGO_URI = config.MONGO_URI;
    await mongoose.connect(MONGO_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;