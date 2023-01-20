import React, {useState, useCallback} from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
//
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
//
import RegScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Posts from "./Screens/Posts";
import CreatePosts from "./Screens/CreatePosts";
import Comments from "./Screens/Comments";
import Map from "./Screens/Map";
import Profile from "./Screens/Profile";
import Home from "./Screens/Home";
//
//
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
const MainStack = createStackNavigator();
//
console.log("Platform:", Platform.OS);
console.log("width screen:", widthScreen);
console.log("height screen:", heightScreen);
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
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Home">
          <MainStack.Screen name="Registration" component={RegScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen name="Posts" component={Posts} />
          <MainStack.Screen name="Create Post" component={CreatePosts} />
          <MainStack.Screen name="Comments" component={Comments} />
          <MainStack.Screen name="Maps" component={Map} />
          <MainStack.Screen name="Profile" component={Profile} />
        </MainStack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
