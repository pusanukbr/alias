import dotenv from "dotenv";
import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
const app = express();
import http from "http";
const server = http.Server(app);
import cors from "cors";
import { connect } from "mongoose";
dotenv.config();
import router from "./routers/index.js";
const PORT = process.env.PORT || 4000;
// setting
app.use(
  cors({ credentials: true, origin: process.env.CLIENT_URL }),
  json(),
  urlencoded({ extended: true }),
  cookieParser()
);

app.use("/", router);

const startServer = async () => {
  try {
    await connect(process.env.DB_URL, { useNewUrlParser: true });
    server.listen(PORT, () => console.log(`Server start on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

// server
startServer();
