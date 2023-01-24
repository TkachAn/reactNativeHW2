import React from "react";
import {View, Text, StyleSheet} from "react-native";
const CreatePosts = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.img}>
       <Text>image Screen</Text>
      </View>
      <View style={styles.title}>
       <Text>title Screen</Text>
      </View>
      <View style={styles.map}>
       <Text>map Screen</Text>
      </View> */}
      {/* <TouchableOpacity
                  style={{...styles.btn, marginTop: isShowKeyboard ? 0 : 40}}
                  onPress={keyboardHide}
                  activeOpacity={0.8}
                >
                  <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  img: {
    width: 320,
    height: 240,
    borderWidth: 1,
    borderColor: "#888",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: "80%",
    // alignItems: "center",
    justifyContent: "center",
  },
});

export default CreatePosts;
