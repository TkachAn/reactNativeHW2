// import {forHorizontalIOS} from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Authorization from "./auth";
const Posts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <View style={styles.userPic}></View>
        <View style={styles.userText}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.cont}>
        <Text>Posts Screen!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  userBox: {
    marginBottom: 16,
    width: "100%",

    flexDirection: "row",
    // justifyContent: "center",
  },

  userPic: {
    // position: "absolute",
    // top: -60,
    width: 60,
    height: 60,
    borderColor: "#181818",
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
  },
  userText: {
    marginLeft: 16,
    // padding: 8,
    justifyContent: "center",
  },
  userName: {
    fontSize: 14,
    fontWeight: "700",
  },
  userEmail: {
    fontSize: 12,
    fontWeight: "400",
  },
  cont: {
    // flex: 7,
    backgroundColor: "#FFF",

    justifyContent: "center",
    alignItems: "center",
  },
  plusPic: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Posts;
