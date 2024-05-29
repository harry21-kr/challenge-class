import { createContext } from "react";

const initialValue = {
  isLoggedIn: false,
};

export const AuthContext = createContext(initialValue);
