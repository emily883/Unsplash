import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

interface EnvVariables {
  DB_USERNAME?: string;
  DB_PASSWORD?: string;
  DB_HOST_URL?: string;
  DATABASE_NAME?: string;
}

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST_URL,
  DATABASE_NAME,
}: EnvVariables = process.env as EnvVariables;

if (
  DB_USERNAME &&
  DB_PASSWORD &&
  DB_HOST_URL &&
  DATABASE_NAME
) {
  const DATABASE_URL = `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST_URL}/${DATABASE_NAME}`;

  let variables: string = "";

  try {
    variables = fs.readFileSync(".env", "utf-8");
  } catch (err) {
    console.error("Error reading .env file:", err);
    process.exit(1);
  }

  const updatedVariables = variables.includes("DATABASE_URL")
    ? variables.replace(/DATABASE_URL=.*/, `DATABASE_URL=${DATABASE_URL}`)
    : `${variables}\nDATABASE_URL=${DATABASE_URL}`;

  try {
    fs.writeFileSync(".env", updatedVariables, "utf-8");
    console.log(".env file updated successfully.");
  } catch (err) {
    console.error("Error writing to .env file:", err);
    process.exit(1);
  }
} else {
  console.error("Required environment variables are missing.");
}
