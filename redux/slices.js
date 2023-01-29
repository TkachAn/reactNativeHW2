import {createSlice} from "@reduxjs/toolkit";
//
console.log("Slises");
//
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    login: null,
  },
  reducers: {},
});
// //
// export const dashSlice = createSlice({
//   name: "auth",
//   initialState: {
//     userId: null,
//     nickname: null,
//   },
//   reducers: {},
// });
