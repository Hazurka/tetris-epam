import * as mongoose from "mongoose";

export interface IUser extends Document {
  _id: string;
  email: string;
  password: string;
  points?: number;
  lastGameMultiple: number;
  bestGameMultiple: number;
  gamePoints: number[];
  createdAt: Date;
}

const UserSchema: mongoose.Schema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  email: { type: String, required: true },
  password: { type: String, required: true },
  points: { type: Number },
  createdAt: { type: Date, required: false },
});

export const User = mongoose.model<IUser>("User", UserSchema);
