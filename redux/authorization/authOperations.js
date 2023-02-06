import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
//
import {Alert} from "react-native";
import {auth, app} from "../../firebase/config";
import {authSlice} from "./authSlice";
//
const {updateUserProfile, authStateChange, authLogOut} = authSlice.actions;
//
console.log("Operations!");
//
const authSignUp =
  ({avatar, login, email, password}) =>
  async (dispatch, getState) => {
    // console.log("userAuth:", login, email, password);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: avatar,
      });
      const {uid, displayName, photoURL} = auth.currentUser; //email,

      dispatch(
        updateUserProfile({
          userId: uid,
          login: displayName,
          email, //: email
          avatar: photoURL,
        })
      );
    } catch (error) {
      // console.log("error:", error);
      Alert.alert("error message Up!", error.message);
    }
  };
//
const authSignIn =
  ({email, password}) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log("!user:", auth.currentUser.displayName);
      const {uid, displayName, photoURL} = auth.currentUser;

      dispatch(
        updateUserProfile({
          userId: uid,
          login: displayName,
          email,
          logoImage: photoURL,
        })
      );
    } catch (error) {
      console.log("error", error.message);
      Alert.alert("Email or password doesn't match!!!");
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
  await onAuthStateChanged(auth, (user) => {
    try {
      //
      if (user) {
        console.log("displayName:", user.displayName);
        const userUpdateProfile = {
          login: user.displayName,
          userId: user.uid,
        };
        dispatch(authStateChange({stateChange: true}));
        dispatch(updateUserProfile(userUpdateProfile));
      } else {
        console.log("error message Chenge!", error.message);
      }
      // });
    } catch (error) {
      console.log("error message Chenge!!", error.message);
    }
  });
};
export {authSignIn, authSignUp, authSignOut, authStateCahnge};
