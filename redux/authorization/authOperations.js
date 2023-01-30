import firebase from "../../firebase/config";
import {authSlice} from "./auth";
//
console.log("Operations");
// const {updateUserProfile, authSignOut, authStateChange} = authSlice.actions;
const authSignUp =
  ({email, pass, login}) =>
  async (dispatch, getState) => {
    console.log("email, password, nickname", email, pass, login);
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, pass);
      await user.updateProfile({
        displayName: login,
      }); //createUserWithEmailAndPassword
      console.log("user:", user);
    } catch (error) {
      console.log("error:", error);
      console.log("error.code:", error.code);
      console.log("error.message:", error.message);
    }
  };
//
const authSignIn = () => async (dispatch, getState) => {};
//
const authSignOut = () => async (dispatch, getState) => {};

export {authSignIn, authSignUp, authSignOut};
