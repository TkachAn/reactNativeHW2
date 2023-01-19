import React, {useState, useCallback} from "react";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {StyleSheet, View} from "react-native";
import RegScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
//
console.log("Platform:", Platform.OS);
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
  // const [user, setUser] = useState(null);
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      {/* <LoginScreen /> */}
      <RegScreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
