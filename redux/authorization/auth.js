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
  reducers: {
    // removeUser(state) {
    //   state.email = null;
    //   state.login = null;
    //   state.userId = null;
    // },
  },
});
// export const {removeUser} = userSlice;
