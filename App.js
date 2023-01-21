import React, {useState, useCallback} from "react";
import {Dimensions} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
//
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
//
import Authorization from "./Screens/auth";
//
const widthScreen = Dimensions.get("window").width;
const heightScreen = Dimensions.get("window").height;
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
  const auth = Authorization(1);
  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      {auth}
    </NavigationContainer>
  );
}
{
  // import RegScreen from "./Screens/Registration";
  // import LoginScreen from "./Screens/Login";
  // import Posts from "./Screens/Posts";
  // import CreatePosts from "./Screens/CreatePosts";
  // import Comments from "./Screens/Comments";
  // import Map from "./Screens/Map";
  // import Profile from "./Screens/Profile";
  // import Home from "./Screens/Home";
  /* <NavigationContainer onLayout={onLayoutRootView}>
        <MainStack.Navigator initialRouteName="Home">
          <MainStack.Screen name="Authorization" component={Authorization} />
          <MainStack.Screen name="Registration" component={RegScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen name="Posts" component={Posts} />
          <MainStack.Screen name="Create Post" component={CreatePosts} />
          <MainStack.Screen name="Comments" component={Comments} />
          <MainStack.Screen name="Maps" component={Map} />
          <MainStack.Screen name="Profile" component={Profile} />
        </MainStack.Navigator>
      </NavigationContainer> */
}
