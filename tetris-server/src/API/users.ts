import * as express from "express";
import * as mongoose from "mongoose";
import JWTLogin from "../helpers/jwt-login";

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
      points: 0,
      email,
      password: passwordHash(req.body.password),
    };
    try {
      const createdUser: IUser = await new User(user).save();
      console.log("createdUser -> ", createdUser);

      const loggedInUser = await JWTLogin(createdUser);
      return res.json(loggedInUser);
    } catch (e) {
      console.log("error => ", e);
    }
  }
});

UsersRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //TODO if the email isInvalid check
  try {
    const user: IUser = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ errMsg: "Invalid Email" });
    }
    const isPasswordValid = await passwordCompare(password, user.password);
    if (!isPasswordValid) {
      //if the password is invalid err msg
      res.status(400).json({ errMsg: "Invalid Password" });
    }

    const loggedInUser = await JWTLogin(user);
    res.json(loggedInUser);
  } catch (err) {
    console.error({ err });
  }
});

UsersRouter.get("/all", async (req, res) => {
  const users: IUser[] = await User.find();
  res.status(200).send({ users });
});

UsersRouter.post("/updateScore", async (req, res) => {
  const { email, points, _id } = req.body;
  if (!email || !_id) {
    return res.status(400).send({ message: "Invalid data." });
  }

  let user: IUser;
  try {
    user = await User.findOne({ email });
  } catch (err) {
    return res.status(404).send({ message: "Error while searching for user." });
  }

  if (!user || user._id.toString() !== _id) {
    return res.status(401).send({ message: "Unauthorized user." });
  }

  if (user.points > points) {
    return res.status(200).send({ message: "lower score! " });
  }

  const query = { _id: user._id };
  try {
    await User.findOneAndUpdate(query, { points });
    res.status(200).send({ message: "succesfully updated record" });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
});
