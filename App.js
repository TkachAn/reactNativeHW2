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
export default function App() {
  // const [login, setLogin] = useState("");
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");

  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setstate(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground
          source={require("./assets/imgBgReg.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.formBox,
                marginBottom: isShowKeyboard ? 20 : 150,
              }}
            >
              <View style={styles.picBox}></View>
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
                value={state.pass}
                onChangeText={(value) =>
                  setstate((prevState) => ({...prevState, password: value}))
                }
                secureTextEntry={true}
              />
              <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                <Text style={styles.btnTitle}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <Text>Уже есть аккаунт? Войти</Text>
              <View style={styles.indicator}></View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    // justifyContent: "center",
    justifyContent: "flex-end",
    alignItems: "center",
    // justifyContent: "center",
  },
  formBox: {
    position: "relative",
    paddingTop: 92,
    paddingBottom: 15,
    borderRadius: 26,
    alignItems: "center",

    backgroundColor: "#fff",
    // width: 375,
    width: "100%",
    height: "67%",
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
    // boxShadows: "10px 5px 5px 10px red",
  },
  title: {
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
    marginTop: 66,
    width: 134,
    height: 5,
    backgroundColor: "#212121",
  },
});
