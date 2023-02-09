import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useDispatch} from "react-redux";
//
import {authSignOut} from "../../redux/authorization/authOperations";
import {Feather} from "@expo/vector-icons";
import {StyleSheet, TouchableOpacity} from "react-native";
