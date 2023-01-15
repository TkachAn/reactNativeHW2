import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
// import Blank from "./Screens/screen";

export default function App() {
  const [login, setLogin] = useState("");
  const loginHandler = (text) => setLogin(text);
  const [email, setEmail] = useState("");
  const emailHandler = (text) => setEmail(text);
  const [pass, setPass] = useState("");
  const passHandler = (text) => setPass(text);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require("./assets/imgBgReg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.formBox}>
          <View style={styles.picBox}></View>
          <Text style={styles.title}>Регистрация</Text>
          <TextInput
            style={styles.input}
            placeholder="Логин"
            value={login}
            onChangeText={loginHandler}
          />
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты "
            value={email}
            onChangeText={emailHandler}
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={pass}
            onChangeText={passHandler}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.btnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <Text>Уже есть аккаунт? Войти</Text>
          <View style={styles.indicator}></View>
        </View>
      </ImageBackground>
    </View>
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
    justifyContent: "end",
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
