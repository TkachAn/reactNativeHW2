import {createSlice} from "@reduxjs/toolkit";
//
console.log("AuthReducsr");
//
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    login: null,
    // email: null,
  },
  reducers: {},
});
