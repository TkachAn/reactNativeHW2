import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {authSlice} from "./authorization/authSlice";
import {photoSlice} from "./dash/photoSlices";
//
console.log("Store!");
//
const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [photoSlice.name]: authSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
