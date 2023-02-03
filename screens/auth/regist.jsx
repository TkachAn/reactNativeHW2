import React, {useState} from "react";
import {useDispatch} from "react-redux";
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
import {authSignUp} from "../../redux/authorization/authOperations";
import Avatar from "../components/avatar";
//
const initialState = {
  login: "",
  email: "",
  password: "",
  avatar: "https://reactnative.dev/docs/assets/p_cat2.png",
};
console.log("RegisterScreen");
export default function RegisterScreen({navigation}) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setstate] = useState(initialState);
  const [isShowPassword, setIsShowPassword] = useState(true);
  //
  const dispatch = useDispatch();
  //
  const handleSubmit = () => {
    Keyboard.dismiss();
    setstate(initialState);
    console.log(state);
    if (state) {
      dispatch(authSignUp(state));
    }
    setIsShowKeyboard(false);
    setIsShowPassword(true);
  };
  const showPassword = () => setIsShowPassword(!isShowPassword);
  const addPic = () => {
    console.log("add Pic");
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleSubmit}>
        <ImageBackground
          style={styles.imageBG}
          source={require("../../assets/imgBgReg.png")}
        >
          <View style={styles.containerForm}>
            <View style={styles.avatarPosition}>
              <View style={styles.avatarBox}>
                <Avatar pic={state.avatar} press={addPic} />
              </View>
            </View>

            <View style={styles.titlePosition}>
              <Text style={styles.title}>Регистраця</Text>
            </View>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View>
                <View style={styles.inputBox}>
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
                </View>
                <View style={styles.inputBox}>
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
                </View>
                <View style={styles.inputBox}>
                  <TextInput
                    style={styles.input}
                    // keyboardType="email-address"
                    placeholder="Пароль"
                    onFocus={() => setIsShowKeyboard(true)}
                    secureTextEntry={isShowPassword}
                    value={state.password}
                    onChangeText={(value) =>
                      setstate((prevState) => ({...prevState, password: value}))
                    }
                  />
                  <TouchableOpacity
                    style={styles.input_btn}
                    onPress={showPassword}
                  >
                    <Text style={styles.input__text}>Показать</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={handleSubmit}
                  activeOpacity={0.8}
                >
                  <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
            <View style={styles.input2}>
              <TouchableOpacity
                style={styles.link}
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text style={styles.link__text}>Уже есть аккаунт? Войти</Text>
              </TouchableOpacity>
              <View style={styles.indicator}></View>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  containerForm: {
    backgroundColor: "#fff",
  },
  avatarPosition: {
    position: "relative",
    alignItems: "center",
  },
  avatarBox: {
    position: "absolute",
    top: -60,
  },

  titlePosition: {
    marginTop: 80,
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontFamily: "Roboto-500",
    fontSize: 30,
    fontWeight: "500",
  },
  inputBox: {
    marginBottom: 16,
    paddingRight: 18,
    paddingLeft: 18,
  },
  input: {
    paddingRight: 18,
    paddingLeft: 18,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: "#F6F6F6",
    height: 50,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 8, //25,
    marginTop: 20,
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
    marginTop: 36,
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    marginBottom: 7,
  },
  input2: {
    alignItems: "center",
  },
  input_btn: {
    position: "absolute",

    top: 11,
    right: 30,
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
