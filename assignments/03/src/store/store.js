import { configureStore } from "@reduxjs/toolkit";
import memoReducer from "./memo";

const store = configureStore({ reducer: { memo: memoReducer } });

export default store;
