import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons, Feather} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";

import LoginScreen from "./screens/auth/login";
import RegisterScreen from "./screens/auth/regist";
import PostsScreen from "./screens/main/posts/Posts";
import CreateScreen from "./screens/main/createPost/CreatePosts";
import ProfileScreen from "./screens/main/profile/Profile";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{showLabel: false}}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name="postage-stamp"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <AntDesign name="pluscircleo" size={35} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
