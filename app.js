import express from "express";
const app = express();
import { connectToDB } from "./src/db/connect.js";
import userRouter from "./src/routes/userRoutes.js";
import "dotenv/config";
import { notFound } from "./src/middleware/notFound.js";
import { errorHandlerMiddleware } from "./src/middleware/errorHandler.js";
// middlewares

// if we don't use below line of code then we don't have data in req.body
app.use(express.json());

// routes

app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/users", userRouter);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;

const start = async () => {
  // kind of makes sense to spin server(express) only when the db is connected successfully!

  try {
    await connectToDB(process.env.MONGO_URI);
    console.log("DB connected!");
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
