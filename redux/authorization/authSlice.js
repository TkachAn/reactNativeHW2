import {createSlice} from "@reduxjs/toolkit";
//
const initialState = {
  userId: null,
  stateChange: false,
  login: null,
  email: null,
  avatar: null,
};
//
console.log("AuthReducsr");
//
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, {payload}) => ({
      ...state,
      // userId: payload.uid,
      // login: payload.displayName,
      userId: payload.userId,
      login: payload.login,
      //
      email: payload.email,
      avatar: payload.avatar,
    }),
    authStateChange: (state, {payload}) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authLogOut: () => initialState, //state,
  },
  // reducers: {
  //   updateUserProfile: (state, {payload}) => ({
  //     ...state,
  //     userId: payload.userId,
  //     login: payload.login,
  //     email: payload.email,
  //   }),
  //   authStateChange: (state, {payload}) => ({
  //     ...state,
  //     stateChange: payload.stateChange,
  //   }),
  //   authSignOut: () => initialState,
  //   // updateUserProfile: (state, {payload}) => {
  //   //   state.userId = payload.uid;
  //   //   state.nickName = payload.displayName;
  //   // },
  //   // updateStatusChange: (state, {payload}) => {
  //   //   state.stateChange = payload;
  //   // },
  // },
});
// export const {removeUser} = userSlice;
