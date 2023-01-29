// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// import {initializeApp} from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAb2pzMK7iGKRk49ykz_QyKW0K3bFAZ2KE",
//   authDomain: "rn-homework-at.firebaseapp.com",
//   projectId: "rn-homework-at",
//   storageBucket: "rn-homework-at.appspot.com",
//   messagingSenderId: "856577977659",
//   appId: "1:856577977659:web:0224a552d7af116b8d1b1e",
// };
// //
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//
//
//
import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb2pzMK7iGKRk49ykz_QyKW0K3bFAZ2KE",
  authDomain: "rn-homework-at.firebaseapp.com",
  databaseURL: "https://rn-homework-at.firebaseapp.com",
  projectId: "rn-homework-at",
  storageBucket: "rn-homework-at.appspot.com",
  messagingSenderId: "856577977659",
  appId: "1:856577977659:web:0224a552d7af116b8d1b1e",
};

export default firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const db = firebase.firestore();
// const storage = firebase.storage();
// export {auth, db, storage};
