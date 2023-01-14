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
// import Blank from "./Screens/screen";source={"../public/imgBgReg.png"}
// const image = {require('./assets/imgBgReg.png')};
// const image = {uri: "./assets/imgBgReg.png"};
// const image = {uri: "https://reactjs.org/logo-og.png"};

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
    justifyContent: "center",
    alignItems: "center",
    // justifyContent: "center",
  },
  formBox: {
    // flex: 1,
    marginTop: 263,
    paddingTop: 92,
    paddingBottom: 15,
    borderRadius: 26,
    alignItems: "center",
    backgroundColor: "#fff",
    width: 375,
    height: 549,
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
    width: 343,
    height: 50,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 51,
    width: 343,
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
});
