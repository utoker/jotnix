import dotenv from "dotenv";
import path from "path";

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env";
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

// Environment configuration
export const config = {
  // Server
  PORT: process.env.PORT || 3001,
  NODE_ENV: process.env.NODE_ENV || "development",
  
  // Database
  MONGO_URI: process.env.MONGO_URI,
  
  // JWT (for future use)
  JWT_SECRET: process.env.JWT_SECRET || "your-secret-key",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",
  
  // API Keys (for future use)
  API_KEY: process.env.API_KEY,
  
  // CORS (for future use)
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
} as const;

// Validation function
export const validateConfig = () => {
  const required = ["MONGO_URI"] as const;
  const missing = required.filter(key => !config[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
};
