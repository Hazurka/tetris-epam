const jwt = require("jsonwebtoken");
import { IUser } from "../schema/users";

const JWTLogin = async (user: IUser) => {
  return new Promise((resolve) => jwt.sign(
    { id: user._id },
    "123",
    {
      expiresIn: 3600,
    },
    (err: any, token: any) => {
      if (err) throw err;
      resolve({
        token,
        user: {
          _id: user._id,
          email: user.email,
        },
      })
    }
  ));
}

export default JWTLogin;
