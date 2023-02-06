import React, {useState, useEffect} from "react";
import {Dimensions} from "react-native";
import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {Feather} from "@expo/vector-icons";
//
const widthScreen = Dimensions.get("window").width;
//
export default function Avatar({pic, press}) {
  const [icon, setIcon] = useState("");
  //
  useEffect(() => {
    if (!pic) {
      setIcon("plus");
    } else {
      setIcon("x");
    }
  }, []);
  // console.log("pic:", pic);
  // console.log("icon:", icon);
  return (
    <View style={styles.avatar}>
      <View style={styles.picBox}>
        {pic ? (
          <Image source={{uri: pic}} style={{width: 120, height: 120}} />
        ) : (
          <Image
            source={require("../../assets/adaptive-icon.png")}
            style={{width: 120, height: 120}}
          />
        )}
        <TouchableOpacity
          onPress={press}
          style={styles.plus}
          activeOpacity={0.8}
        >
          <View style={styles.plusPic}>
            <Feather name={icon} size={24} color="#FF6C00" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//
const styles = StyleSheet.create({
  avatar: {
    position: "relative",
    backgroundColor: "#fff",
    height: 60,
    width: widthScreen,
    alignItems: "center",
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
});

//https://reactnative.dev/img/tiny_logo.png
{
  /* <AntDesign name="closecircleo" size={24} color="#FF6C00" />
          <EvilIcons name="close" size={24} color="#FF6C00" /> */
} //onPress={press}String(pic)
