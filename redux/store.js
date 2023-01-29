import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {authSlice} from "./authorization/auth";
// import {dashSlice} from "./dashBoard";
//
const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  // [dashSlice.name]: dashSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
