import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";

const Blank = (children, title) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/imgBgReg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.formBox}>
          <View style={styles.picBox}></View>
          <Text style={styles.title}>{title}</Text>
          <TextInput
            style={styles.input}
            placeholder="Логин"
            value={login}
            onChangeText={loginHandler}
          />
          {children}
        </View>
      </ImageBackground>
    </View>
  );
};
export default {Blank};
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
  picBox: {
    width: 120,
    height: 120,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
  },
  // input: {
  //   marginBottom: 16,
  //   paddingRight: 18,
  //   paddingLeft: 18,
  //   borderColor: "#E8E8E8",
  //   borderRadius: 8,
  //   borderWidth: 1,
  //   backgroundColor: "#F6F6F6",
  //   width: 343,
  //   height: 50,
  // },
  // btn: {
  //   backgroundColor: "#FF6C00",
  //   height: 51,
  //   width: 343,
  //   borderRadius: 25,
  //   marginTop: 40,
  //   marginBottom: 16,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginHorizontal: 20,
  // },
  // btnTitle: {
  //   color: "#fff",
  //   fontSize: 18,
  // },
});
