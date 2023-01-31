import React from "react";
import {View, Text, StyleSheet} from "react-native";
//
console.log("CommentsScreen!");
//

const Comments = () => (
  <View style={styles.container}>
    <Text>CommentsScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Comments;
