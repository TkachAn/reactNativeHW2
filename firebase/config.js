import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
//
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//
console.log("Config!");

//
const firebaseConfig = {
  apiKey: "AIzaSyAb2pzMK7iGKRk49ykz_QyKW0K3bFAZ2KE",
  authDomain: "rn-homework-at.firebaseapp.com",
  projectId: "rn-homework-at",
  storageBucket: "rn-homework-at.appspot.com",
  messagingSenderId: "856577977659",
  appId: "1:856577977659:web:0224a552d7af116b8d1b1e",
};
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const fsbase = getFirestore(app);
export {auth, app, fsbase};
