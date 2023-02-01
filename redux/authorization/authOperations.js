import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../../firebase/config";
const auth = getAuth(app);
// import {auth} from "../../firebase/config";
// import {auth} from "../authorization/auth";

import {authSlice} from "../authorization/auth";
//
console.log("Operations!");
// const {updateUserProfile, authSignOut, authStateChange} = authSlice.actions;
const authSignUp =
  ({login, email, password}) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
      });
      const user = auth.currentUser;
      console.log("user", user);

      const updateUserSuccess = auth.currentUser;
      dispatch(authSlice.actions.updateUserProfile(user));
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };
//
const authSignIn =
  ({email, password}) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", user);
    } catch (error) {
      console.log("error", error);
      console.log("error.message", error.message);
    }
  };
//
const authSignOut = () => async (dispatch, getState) => {};

export {authSignIn, authSignUp, authSignOut};
