import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {authSignUp} from "../../redux/authorization/authOperations";
import Avatar from "../components/avatar";
import Form from "../components/form";
//
const initialState = {
  avatar: "", //https://reactnative.dev/docs/assets/p_cat2.png
};
console.log("RegisterScreen");
export default function RegisterScreen({navigation}) {
  const [state, setstate] = useState(initialState);
  //
  const dispatch = useDispatch();
  //
  const handleSubmit = (data) => {
    Keyboard.dismiss();
    console.log("data:", data);
    if (data) {
      dispatch(authSignUp(data));
    }
  };
  const addPic = () => {
    console.log("add Pic");
  };
  //
  const handleBG = () => {
    Keyboard.dismiss();
  };
  //
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleBG}>
        <ImageBackground
          style={styles.imageBG}
          source={require("../../assets/imgBgReg.png")}
        >
          <Avatar pic={state.avatar} press={addPic} />
          <Form title="РЕГИСТРАЦИЯ" handleClick={handleSubmit} />
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.link}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.link__text}>Уже есть аккаунт? Войти</Text>
            </TouchableOpacity>
            <View style={styles.indicator}></View>
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

  titlePosition: {
    marginTop: 30,
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
  footer: {
    alignItems: "center",
    backgroundColor: "#fff",
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
