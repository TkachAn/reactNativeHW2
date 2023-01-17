import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
// import Blank from "./Screens/screen";
const initialState = {
  login: "",
  email: "",
  pass: "",
};
const keyBool = false;
export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  console.log("Platform:", Platform.OS);

  console.log("isShowKeyboard:", isShowKeyboard);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/imgBgReg.png")}
        >
          {/* <View style={styles.image}> */}
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formBox,
                marginBottom: isShowKeyboard ? 100 : 5,
                // backgroundColor: isShowKeyboard ? "green" : "yellow",
              }}
            >
              {/* <View style={styles.formBox}> */}
              <View style={styles.picBox}>
                <TouchableOpacity
                  style={styles.plus}
                  // onPress={keyboardHide}
                  activeOpacity={0.8}
                >
                  <Text style={styles.btnPlus}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Регистрация</Text>
              <TextInput
                style={styles.input}
                placeholder="Логин"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.login}
                onChangeText={(value) =>
                  setstate((prevState) => ({...prevState, login: value}))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Адрес электронной почты "
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
                onChangeText={(value) =>
                  setstate((prevState) => ({...prevState, email: value}))
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Пароль"
                onFocus={() => setIsShowKeyboard(true)}
                secureTextEntry={true}
                value={state.pass}
                onChangeText={(value) =>
                  setstate((prevState) => ({...prevState, pass: value}))
                }
              />
              {/* <View style={styles.btn}> */}
              <TouchableOpacity
                style={styles.btn}
                onPress={keyboardHide}
                activeOpacity={0.8}
              >
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              {/* </View> */}
              <Text>Уже есть аккаунт? Войти</Text>
              <View style={styles.indicator}></View>
            </View>
            {/* </View> */}
          </KeyboardAvoidingView>
          {/* </View> */}
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
    position: "relative",
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
  title: {
    marginTop: 92,
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 33,
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
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    width: "91%",
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnTitle: {
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
  btnPlus: {
    position: "absolute",
    // bottom: -2,
    // bottom: -1,
    top: -2,
    fontSize: 25,
    color: "#FF6C00",
  },
});
