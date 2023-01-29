import React, {useState, useCallback} from "react";
import {Platform, Dimensions} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
//
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
//
import {Provider} from "react-redux";
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
//
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-500": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-700": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
  //
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const routing = useRoute(0);
  // const routing = useRoute(1);
  return (
    <>
      <Provider store={store}>
        <StatusBar style="auto" />
        <NavigationContainer onLayout={onLayoutRootView}>
          {routing}
        </NavigationContainer>
      </Provider>
    </>
  );
}
