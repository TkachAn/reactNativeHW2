import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {authSlice} from "./auth";
import {dashSlice} from "./dashBoard";
//
const rootReduser = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [dashSlice.name]: dashSlice.reducer,
});
export const store = configureStore({
  reducer: rootReduser,
});
