import React from "react";
import {useDispatch} from "react-redux";
import {StyleSheet, View, Alert} from "react-native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
//
import {Feather} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
//

//
import {authSignOut} from "./redux/authorization/authOperations";
//
import LoginScreen from "./screens/auth/login";
import RegisterScreen from "./screens/auth/regist";
import PostsScreen from "./screens/main/posts/Posts";
import CreatePost from "./screens/main/createPost/CreatePosts";
import ProfileScreen from "./screens/main/profile/Profile";
import {Confirm} from "./screens/components/confirm";
//
console.log("Routing!");
//
const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
//
export const useRoute = (isAuth) => {
  // const dispatch = useDispatch();
  const outButtonAlert = () => {
    // Alert.alert("Хочешь ПРОДОЛЖИТЬ? жми OK", console.log("Я сделал ЭТО!!!"));
    // Confirm("Хочешь ПРОДОЛЖИТЬ? жми OK", console.log("Я сделал ЭТО!!!"));
    // dispatch(authSignOut());
    // const dispatch = useDispatch();
    Alert.alert("На ВЫХОД с вещями", "до Свидапия!", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed");
          // dispatch(authSignOut());
        },
      }, //authSignOut()}, //
    ]);
  };
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    //
    <MainTab.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          height: 88,
          borderBottomWidth: 1,
          borderBottomColor: "#B3B3B3",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          lineHeight: 22,
        },
        tabBarStyle: {
          height: 83,
          paddingHorizontal: 63,
          borderTopWidth: 1,
          borderTopColor: "#B3B3B3",
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6C00",
      }}
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Feather name="grid" size={size} color={color} />
          ),
          title: "Публикации!",
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
      <MainTab.Screen
        name="Create"
        component={CreatePost}
        options={{
          tabBarIcon: ({size}) => {
            return (
              <View style={styles.create}>
                <Feather name={"plus"} size={size} color={"#fff"} />
              </View>
            );
          },
          title: "Создать публикацию",
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display: "none",
            },
            null,
          ],
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </MainTab.Navigator>
  );
};
const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: "bold",
    fontSize: 17,
    lineHeight: 20,
  },
  create: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
