import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
//
import {auth} from "../../firebase/config";
import {authSlice} from "../authorization/auth";
//
console.log("Operations!");
//
const authSignUp =
  ({login, email, password}) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
      });
      const user = auth.currentUser;
      console.log("authSignUp user:", user);
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
const authSignOut = () => async (dispatch, getState) => {
  const user = await signOut(auth);
};

export {authSignIn, authSignUp, authSignOut};
