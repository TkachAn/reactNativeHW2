import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
//
import {auth} from "../../firebase/config";
import {authSlice} from "./authSlice";
//
const {updateUserProfile, authStateChange, authLogOut} = authSlice.actions;
//
console.log("Operations!");
//
const authSignUp =
  ({login, email, password}) =>
  async (dispatch, getState) => {
    // console.log("userAuth:", login, email, password);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
      });
      const user = auth.currentUser;
      console.log("authSignUp user:", user);
      dispatch(updateUserProfile(user));
    } catch (error) {
      // console.log("error:", error);
      console.log("error message Up!", error.message);
    }
  };
//
const authSignIn =
  ({email, password}) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("user", auth.currentUser.displayName);
    } catch (error) {
      // console.log("error", error);
      console.log("error message In!", error.message);
    }
  };
//
const authSignOut = () => async (dispatch, getState) => {
  try {
    await signOut(auth);
    dispatch(authLogOut());
    dispatch(authStateChange({stateChange: false}));
  } catch (error) {
    console.log("error message Out!", error.message);
  }
};
const authStateCahnge = () => async (dispatch, getState) => {
  try {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("displayName", user.displayName);
        const userUpdateProfile = {
          login: user.displayName,
          userId: user.uid,
        };
        dispatch(authStateChange({stateChange: true}));
        dispatch(updateUserProfile(userUpdateProfile));
      } else {
        console.log("error message Chenge!", error.message);
      }
    });
  } catch (error) {
    console.log("error message Chenge!", error.message);
  }

  // await db.auth().onAuthStateChanged((user) => {
  //   if (user) {
  //     const userUpdateProfile = {
  //       nickName: user.displayName,
  //       userId: user.uid,
  //     };

  //     dispatch(authStateChange({stateChange: true}));
  //     dispatch(updateUserProfile(userUpdateProfile));
  //   }
  //  });
};
export {authSignIn, authSignUp, authSignOut, authStateCahnge};
