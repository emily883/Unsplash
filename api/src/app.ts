import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

export const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
import imagen from "./routes/imagen";

app.use("/", imagen);

module.exports = app;
