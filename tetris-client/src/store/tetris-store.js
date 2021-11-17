import { createContext } from "react";
import { observable, action, makeObservable } from "mobx";

export class TetrisStore {
  user = null;

  constructor() {
    makeObservable(this, {
      user: observable,
      loginUser: action,
      logoutUser: action,
      getUser: action,
    });
  }

  loginUser(user) {
    this.user = user;
  }
  logoutUser() {
    this.user = null;
  }
  getUser() {
    return this.user;
  }
}

export const tetrisContext = createContext(new TetrisStore());
