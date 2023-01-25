import React from "react";
// import { moduleName } from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import DefaultPosts from "../../nested/defaultPosts";
import Comments from "../../nested/Comments";
import Maps from "../../nested/Map";

const Nested = createStackNavigator();

const PostsScreen = () => {
  return (
    <Nested.Navigator>
      <Nested.Screen
        name="DefaultPosts"
        component={DefaultPosts}
        options={{
          title: "Публикации",
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
