import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: Number(process.env.PORT || 4000),
  db: {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    name: process.env.DB_NAME || "fra_vision"
  },
  jwt: {
    secret: process.env.JWT_SECRET || "change_me",
    expiresIn: process.env.JWT_EXPIRES || "7d"
  },
  corsOrigin: process.env.CORS_ORIGIN || "*"
};