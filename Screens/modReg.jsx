import React, {useState, useCallback} from "react";
import {useFonts} from "expo-font";

import * as SplashScreen from "expo-splash-screen";

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

const initialState = {
  login: "",
  email: "",
  pass: "",
};

export default function ModReg() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  const [isShowPassword, setIsShowPassword] = useState(true);
  // console.log("Platform:", Platform.OS);
  const [fontsLoaded] = useFonts({
    "Roboto-400": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-500": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-700": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    Keyboard.dismiss();
    setstate(initialState);
    console.log(state);
    setIsShowKeyboard(false);
    setIsShowPassword(true);
  };
  const showPassword = () => setIsShowPassword(!isShowPassword);
  return (
    <TouchableWithoutFeedback
      onPress={keyboardHide}
      onLayout={onLayoutRootView}
    >
      <View style={styles.formBox}>
        <View style={styles.picBox}>
          <TouchableOpacity style={styles.plus} activeOpacity={0.8}>
            <View>
              <Image
                style={styles.plusPic}
                source={require("../assets/plusOnly.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Регистрация</Text>
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          placeholder="Логин"
          onFocus={() => setIsShowKeyboard(true)}
          value={state.login}
          onChangeText={(value) =>
            setstate((prevState) => ({...prevState, login: value}))
          }
        />
        <TextInput
          keyboardType="email-address"
          style={styles.input}
          placeholder="Адрес электронной почты "
          onFocus={() => setIsShowKeyboard(true)}
          value={state.email}
          onChangeText={(value) =>
            setstate((prevState) => ({...prevState, email: value}))
          }
        />
        <View style={styles.input}>
          <TextInput
            style={styles.inputPass}
            placeholder="Пароль"
            onFocus={() => setIsShowKeyboard(true)}
            secureTextEntry={isShowPassword}
            value={state.pass}
            onChangeText={(value) =>
              setstate((prevState) => ({...prevState, pass: value}))
            }
          />
          <TouchableOpacity style={styles.input_btn} onPress={showPassword}>
            <Text style={styles.input__text}>Показать</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.btn}> */}
        <TouchableOpacity
          style={styles.btn}
          onPress={keyboardHide}
          activeOpacity={0.8}
        >
          <Text style={styles.btnTitle}>Зарегистрироваться</Text>
        </TouchableOpacity>
        {/* </View> */}
        <TouchableOpacity style={styles.link}>
          <Text style={styles.link__text}>Уже есть аккаунт? Войти</Text>
        </TouchableOpacity>
        <View style={styles.indicator}></View>
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
  inputPass: {
    top: 9,
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