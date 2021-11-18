import { IUser, User } from "../schema/users";

export enum HttpErrorStatusCodes {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum HttpErrorStatusMessages {
  BAD_REQUEST = "Invalid data.",
  UNAUTHORIZED = "Unauthorized user.",
  NOT_FOUND = "Error while searching for user.",
}

export interface ValidationError {
  statusCode: number;
  statusMessage: string;
}

export const validateBody = (email: string, id: string): Error | void => {
  if (!email || !id) {
    return new Error(JSON.stringify({ 
      statusCode: HttpErrorStatusCodes.BAD_REQUEST,
      statusMessage: HttpErrorStatusMessages.BAD_REQUEST
    }));
  }
}

export const validateUser = (id: string, dbId: string): Error | void => {
  if (!id || dbId !== id) {
    throw new Error(JSON.stringify({ 
      statusCode: HttpErrorStatusCodes.UNAUTHORIZED,
      statusMessage: HttpErrorStatusMessages.UNAUTHORIZED
    }));
  }
}

export const _getUser = async (email: string): Promise<IUser> => {
  try {
    return await User.findOne({ email });
  } catch (err) {
    throw new Error(JSON.stringify({
      statusCode: HttpErrorStatusCodes.NOT_FOUND,
      statusMessage: HttpErrorStatusMessages.NOT_FOUND
    }));
  }
}

export const getUser = async (email: string, id: string) => {
  const hasBodyError = validateBody(email, id);
  const user = await _getUser(email);
  validateUser(id, user._id.toString());

  return user;
}
