import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userBox}>
        <View style={styles.userPic}>
          <Image
            source={require("../../../assets/adaptive-icon.png")}
            style={{width: 60, height: 60}}
          />
        </View>
        <View style={styles.userText}>
          <Text style={styles.userName}>Natali Romanoff</Text>
          <Text style={styles.userEmail}>natali@romanoff.com</Text>
        </View>
      </View>
      <View style={styles.photoContainer}>
        <View style={styles.container}></View>
        <Text>image</Text>
      </View>
      <View style={styles.cont}>
        <Text>text</Text>
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
  photoContainer: {
    height: 240,
    width: "100%",
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  userBox: {
    padding: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
    width: "100%",

    flexDirection: "row",
  },

  userPic: {
    width: 60,
    height: 60,
    // borderColor: "#888888",
    borderRadius: 18,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#888",
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
    width: "100%",
    justifyContent: "center",
    // alignItems: "center",
  },
  plusPic: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PostsScreen;
