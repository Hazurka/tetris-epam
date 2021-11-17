import * as express from "express";
import * as mongoose from "mongoose";
import * as cors from "cors";
import 'dotenv-safe/config';

import { UsersRouter } from "./API/users";

console.log(process.env.MONGO_URL);
try {
  mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  ).then(() => console.log("Connected to MongoDB"))
} catch (err) {
  console.log(err);
}

// Create a new express app instance
const app: express.Application = express();
app.use(express.json());
app.use(cors());
app.use("/users", UsersRouter);

app.get("/", function (req, res) {
  res.send("hello world");
});
app.listen(5000, function () {
  console.log("App is listening on port 5000!");
});
