import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Response header middleware
app.use((request: Request, response: Response, next: NextFunction) => {
  response.setHeader("Content-Type", "application/json");

  next();
});

// Routes
import imagen from "./routes/imagen";

app.use("/", imagen);

module.exports = app;
