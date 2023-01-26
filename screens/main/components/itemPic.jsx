import React from "react";
import {StyleSheet, View, Image, Text} from "react-native";
//
import {Feather} from "@expo/vector-icons";
export const Item = ({
  title,
  source,
  photoLocation,
  currentLocation,
  navigation,
}) => (
  <View style={styles.item}>
    <Image style={styles.img} source={{uri: source}} />
    <Text style={styles.title}>{title}</Text>
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Feather
          name="message-circle"
          size={24}
          color="#BDBDBD"
          style={{marginRight: 9}}
          onPress={() => navigation.navigate("Comments")}
        />
        <Text style={{...styles.title, color: "#BDBDBD"}}>0</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Feather
          name="map-pin"
          size={24}
          color="#BDBDBD"
          style={{marginRight: 9}}
          onPress={() => navigation.navigate("Map", currentLocation)}
        />
        <Text style={styles.title}>{photoLocation}</Text>
      </View>
    </View>
  </View>
);
const styles = StyleSheet.create({
  item: {
    marginBottom: 34,
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 11,
  },
  img: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
});
