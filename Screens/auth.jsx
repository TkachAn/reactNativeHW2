import {createStackNavigator} from "@react-navigation/stack";
import Home from "./Home";
import LoginScreen from "./Login";
import RegScreen from "./Registration";

const MainStack = createStackNavigator();

const Authorization = (authObj) => {
  if (!authObj) {
    return (
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="RegScreen"
          component={RegScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    );
  } else
    return (
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    );
};
export default Authorization;
