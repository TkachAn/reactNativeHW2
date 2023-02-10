import React from "react";
import {Alert} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {Ionicons} from "@expo/vector-icons";
import DefaultPosts from "../screens/nested/defPosts";
import Comments from "../screens/nested/Comments";
import Maps from "../screens/nested/Map";
//
console.log("PostsScreen!");
//
const Nested = createStackNavigator();
//
const PostsScreen = () => {
  const outButtonAlert = () => {
    Alert.alert("На ВЫХОД с вещями", "до Свидапия!", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          // await authSignOut();
          console.log("OK Pressed");
        },
      }, //authSignOut()}, //
    ]);
  };
  return (
    <Nested.Navigator>
      <Nested.Screen
        name="DefaultPosts"
        component={DefaultPosts}
        options={{
          title: "Публикации!!!",
          headerShown: true,
          headerRight: ({color}) => (
            <Ionicons
              style={{marginRight: 20}}
              name="exit-outline"
              size={24}
              color={color}
              onPress={() => outButtonAlert()}
            />
          ),
        }}
      />
      <Nested.Screen
        name="Comments"
        component={Comments}
        options={{
          title: "Комментарии",
        }}
      />
      <Nested.Screen
        name="Map"
        component={Maps}
        options={{
          title: "Карта",
        }}
      />
    </Nested.Navigator>
  );
};

export default PostsScreen;
