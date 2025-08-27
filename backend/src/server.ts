import express from "express";
import notesRoutes from "./routes/notesRoutes.ts";
import connectDB from "./config/db.ts";
import { config } from "./config/env.ts";
import rateLimiter from "./middleware/rateLimiter.ts";


const app = express();


app.use(express.json());

app.use(rateLimiter)

app.use('/api/notes', notesRoutes)



app.get('/', (req, res) => {
  res.status(200).send('Jotnix backend is running');
});



connectDB().then(() => {
  console.log("Connected to the database");
  app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
}).catch((error) => {
  console.log("Database connection error:", error);
  process.exit(1);
}); 

