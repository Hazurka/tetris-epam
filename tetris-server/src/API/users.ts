import * as express from "express";
import * as mongoose from "mongoose";
const jwt = require("jsonwebtoken");

import { passwordHash, passwordCompare } from "../lib/auth";
import { IUser, User } from "../schema/users";

export const UsersRouter = express.Router();

const EMAIL_REGEX = /^[^\s@.]+(\.[^\s@.]+)*@[A-Za-z\d]([\w-]*([A-Za-z0-9]\.[A-Za-z0-9])*)*([A-Za-z0-9]\.[A-Za-z]{2,})$/;

UsersRouter.post("/create", async (req, res) => {
  const { email } = req.body;
  if (!EMAIL_REGEX.test(email)) {
    return res.status(409).send({ message: "Please provide a valid email." });
  }

  const existingUser: IUser = await User.findOne({ email });

  if (existingUser) {
    console.log("user already exists");
    return res.status(401).send({ message: "user already exists" });
  } else {
    const user: Partial<IUser> = {
      _id: mongoose.Types.ObjectId().toString(),
      email,
      password: passwordHash(req.body.password),
    };
    try {
      const createdUser: IUser = await new User(user).save();
      console.log("createdUser -> ", createdUser);
      res.status(200).send(req.body);
    } catch (e) {
      console.log("error => ", e);
    }
  }
});

UsersRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //TODO if the email isInvalid check
  const user: IUser = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ errMsg: "Invalid Email" });
  }
  const isPasswordValid = await passwordCompare(password, user.password);
  if (!isPasswordValid) {
    //if the password is invalid err msg
    res.status(400).json({ errMsg: "Invalid Password" });
  }
  jwt.sign(
    { id: user._id },
    "123",
    {
      expiresIn: 3600,
    },
    (err: any, token: any) => {
      if (err) throw err;
      res.json({
        token,
        user: {
          _id: user._id,
          email: user.email,
        },
      });
    }
  );
});

UsersRouter.get("/all", async (req, res) => {
  const users: IUser[] = await User.find();
  res.status(200).send({ users });
});

UsersRouter.post("/updateScore", async (req, res) => {
  const { email, points, createdAt } = req.body;
  const user: IUser = await User.findOne({ email });

  if (user.points > points) {
    return res.status(200).send({ message: "lower score! " });
  }

  const query = { _id: user._id };
  try {
    await User.findOneAndUpdate(query, { points, createdAt });
    res.status(200).send({ message: "succesfully updated record" });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
});
