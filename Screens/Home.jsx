import React, {useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, FlatList} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import Profile from "../Screens/Profile";
import CreatePosts from "../Screens/CreatePosts";
const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
  },
];

function Settings() {
  const [courses, setCourses] = useState(COURSES);
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Settings!</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={courses}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

// function Profile() {
//   return (
//     <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

const Tabs = createBottomTabNavigator();
console.log("HomeScreen");
const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-sharp" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="Settings" component={Settings} />
      <Tabs.Screen name="Profile" component={Profile} />
      <Tabs.Screen name="Create Posts" component={CreatePosts} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
