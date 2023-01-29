import * as firebase from "firebase";
import "firebase/auth";
//
console.log("Config");
//
const firebaseConfig = {
  apiKey: "AIzaSyAb2pzMK7iGKRk49ykz_QyKW0K3bFAZ2KE",
  authDomain: "rn-homework-at.firebaseapp.com",
  projectId: "rn-homework-at",
  storageBucket: "rn-homework-at.appspot.com",
  messagingSenderId: "856577977659",
  appId: "1:856577977659:web:0224a552d7af116b8d1b1e",
};

export default firebase.initializeApp(firebaseConfig);
