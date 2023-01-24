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
const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/imgBgReg.png")}
      >
        <View>
          <View style={styles.formBox}>
            <View style={styles.picBox}>
              <Image
                source={require("../assets/adaptive-icon.png")}
                style={{ width: 120, height: 120 }}
              />
              <TouchableOpacity style={styles.plus} activeOpacity={0.8}>
                <View>
                  <Image
                    style={styles.plusPic}
                    source={require("../assets/plusOnly.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>Natali Romanova</Text>
            <View>
              <Text style={styles.indicator}>Natali Romanova!</Text>
            </View>
            <View style={styles.indicator}></View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  formBox: {
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#fff",
  },
  picBox: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderColor: "#E8E8E8",
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
  },
  plus: {
    position: "absolute",
    backgroundColor: "#FFF",
    height: 25,
    width: 25,
    borderWidth: 1,
    borderRadius: 12.5,
    borderColor: "#FF6C00",

    bottom: 20,
    right: -12.5,
    justifyContent: "center",
    alignItems: "center",
  },
  plusPic: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: 92,
    fontFamily: "Roboto-500",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    paddingRight: 18,
    paddingLeft: 18,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    width: "91%",
    height: 50,
  },
  inputPass: {
    top: 9,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: "91%",
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnTitle: {
    fontFamily: "Roboto-500",
    color: "#fff",
    fontSize: 18,
  },
  indicator: {
    marginTop: 46,
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    marginBottom: 7,
  },
  input_btn: {
    position: "absolute",

    top: 10,
    right: 16,
  },
  input__text: {
    fontSize: 14,
    color: "#a1a1a1",
  },
  link__text: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-400",
    fontSize: 16,
    lineHeight: 19,
  },
});

export default Profile;