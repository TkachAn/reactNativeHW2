import db from "../../firebase/config";

//
const authSignUp =
  ({login, email, pass}) =>
  async (dispatch, getSatte) => {
    try {
      const user = await db.auth().createUserWithEmailAndPassword(email, pass); //createUserWithEmailAndPassword
      console.log("user:", user);
    } catch (error) {
      console.log("error:", error);
      console.log("error.message:", error.message);
    }
  };
//
const authSignIn = () => async (dispatch, getSatte) => {};
//
const authSignOut = () => async (dispatch, getSatte) => {};

export {authSignIn, authSignUp, authSignOut};
