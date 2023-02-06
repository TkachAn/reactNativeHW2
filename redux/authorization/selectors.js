// import {Auth} from "firebase/auth";
export const getLogin = (state) => state.auth.login;
export const getEmail = (state) => state.auth.email;
export const getUserId = (state) => state.auth.userId;
export const getAvatar = (state) => state.auth.avatar;
export const getStateChange = (state) => state.auth.stateChange;
// console.log("state", state);
// console.log("getLogin", getLogin(Auth()));
