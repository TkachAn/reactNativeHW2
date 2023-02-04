import {createSlice} from "@reduxjs/toolkit";
//
console.log("AuthReducsr");
//
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    // nickName: null,
    stateChange: null,
    login: null,
    email: null,
  },
  reducers: {
    updateUserProfile: (state, {payload}) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
      email: payload.email,
    }),
    authStateChange: (state, {payload}) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => initialState,
    // updateUserProfile: (state, {payload}) => {
    //   state.userId = payload.uid;
    //   state.nickName = payload.displayName;
    // },
    // updateStatusChange: (state, {payload}) => {
    //   state.stateChange = payload;
    // },
  },
});
// export const {removeUser} = userSlice;
