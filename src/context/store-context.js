import { createContext, useContext } from "react";
import authStore from "../store/auth-store";

const store = {
  authStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};

export default store;
