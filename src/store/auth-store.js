import { makeAutoObservable, observable } from "mobx";

class AuthStore {
  fullName = "";
  email = "";

  constructor() {
    makeAutoObservable(this, {
      fullName: observable,
      email: observable,
    });
  }
}

export default new AuthStore();
