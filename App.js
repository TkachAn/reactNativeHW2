import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";

import {StyleSheet, Text, TextInput, ImageBackground, View} from "react-native";
// import Blank from "./Screens/screen";source={"../public/imgBgReg.png"}
// const image = {require('./assets/imgBgReg.png')};
// const image = {uri: "./assets/imgBgReg.png"};
// const image = {uri: "https://reactjs.org/logo-og.png"};

export default function App() {
  const [value, setValue] = useState("");
  const inputHandler = (text) => setValue(text);
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
            value={value}
            onChangeText={inputHandler}
          />
          <TextInput
            style={styles.input}
            placeholder="Адрес электронной почты "
            value={value}
            onChangeText={inputHandler}
          />
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            value={value}
            onChangeText={inputHandler}
          />
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
    borderColor: "#000000",
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#E8E8E8",
    width: 343,
    height: 50,
  },
});
