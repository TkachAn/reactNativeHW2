// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
// import express from "express";
import React, {useState, useCallback} from "react";
import {Platform, Dimensions} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
//
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
//
import {Provider, useDispatch} from "react-redux";

//
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./firebase/config";
//
import {useRoute} from "./routing";
import {store} from "./redux/store";
//
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
//
console.log("Platform:", Platform.OS);
console.log("width screen:", widthScreen.toFixed(0));
console.log("height screen:", heightScreen.toFixed(0));
console.log("App");
console.log(process.env);
//
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
  //
  const [user, setUser] = useState(null);
  //
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  //
  onAuthStateChanged(auth, (user) => setUser(user));
  const routing = useRoute(user);
  //
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <NavigationContainer onLayout={onLayoutRootView}>
        {routing}
      </NavigationContainer>
    </Provider>
  );
}
