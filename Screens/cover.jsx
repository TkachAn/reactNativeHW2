import React from "react";
import {StatusBar} from "expo-status-bar";
import {useFonts} from "expo-font";
import {
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

export default function Cover(props) {
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-500": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-700": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "raleway-900": require("../assets/fonts/Raleway/Raleway-ExtraBold.ttf"),
    "raleway-700": require("../assets/fonts/Raleway/Raleway-Bold.ttf"),
    "raleway-500": require("../assets/fonts/Raleway/Raleway-Medium.ttf"),
    "raleway-400": require("../assets/fonts/Raleway/Raleway-Light.ttf"),
    "raleway-200": require("../assets/fonts/Raleway/Raleway-ExtraLight.ttf"),
  });
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.image}
        source={require("../assets/imgBgReg.png")}
      >
        {props.children}
        {/* <TouchableWithoutFeedback
          onPress={keyboardHide}
          onLayout={onLayoutRootView}
        >
          <View>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              
              {props.children}
            </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback> */}
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "flex-end",
  },

  // formBox: {
  //   alignItems: "center",
  //   borderRadius: 25,
  //   backgroundColor: "#fff",
  // },
  // picBox: {
  //   position: "absolute",
  //   top: -60,
  //   width: 120,
  //   height: 120,
  //   borderColor: "#E8E8E8",
  //   borderRadius: 16,
  //   borderWidth: 1,
  //   backgroundColor: "#F6F6F6",
  // },
  // plus: {
  //   position: "absolute",
  //   backgroundColor: "#FFF",
  //   height: 25,
  //   width: 25,
  //   borderWidth: 1,
  //   borderRadius: 12.5,
  //   borderColor: "#FF6C00",

  //   bottom: 20,
  //   right: -12.5,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // plusPic: {
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  // title: {
  //   marginTop: 92,
  //   fontFamily: "Roboto-500",
  //   fontSize: 30,
  //   fontWeight: "500",
  //   marginBottom: 33,
  // },
  // input: {
  //   marginBottom: 16,
  //   paddingRight: 18,
  //   paddingLeft: 18,
  //   borderColor: "#E8E8E8",
  //   borderRadius: 8,
  //   borderWidth: 1,
  //   backgroundColor: "#F6F6F6",
  //   width: "91%",
  //   height: 50,
  // },
  // inputPass: {
  //   top: 9,
  // },
  // btn: {
  //   backgroundColor: "#FF6C00",
  //   height: 51,
  //   width: "91%",
  //   borderRadius: 25,
  //   marginTop: 40,
  //   marginBottom: 16,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginHorizontal: 20,
  // },
  // btnTitle: {
  //   fontFamily: "Roboto-500",
  //   color: "#fff",
  //   fontSize: 18,
  // },
  // indicator: {
  //   marginTop: 46,
  //   width: 134,
  //   height: 5,
  //   backgroundColor: "#212121",
  //   marginBottom: 7,
  // },
  // input_btn: {
  //   position: "absolute",

  //   top: 10,
  //   right: 16,
  // },
  // input__text: {
  //   fontSize: 14,
  //   color: "#a1a1a1",
  // },
  // link__text: {
  //   textAlign: "center",
  //   color: "#1B4371",
  //   fontFamily: "Roboto-400",
  //   fontSize: 16,
  //   lineHeight: 19,
  // },
});
