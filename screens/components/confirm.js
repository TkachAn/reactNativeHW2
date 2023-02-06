import React from "react";
import {Alert} from "react-native";
export const Confirm = (title, func) => {
  Alert.alert(title, [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    {
      text: "OK",
      onPress: () => {
        console.log("OK Pressed");
        func(); // dispatch(authSignOut());
      },
    }, //authSignOut()}, //
  ]);
};
