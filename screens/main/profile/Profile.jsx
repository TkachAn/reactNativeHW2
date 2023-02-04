import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import {getLogin, getUserId} from "../../../redux/authorization/selectors";
import {Item} from "../../main/components/itemPic";
//
const initialState = {
  avatar: "", //https://reactnative.dev/docs/assets/p_cat2.png
};
//
import Avatar from "../../components/avatar";
//
console.log("ProfileScreen!");
//
const ProfileScreen = ({route, navigation}) => {
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState(initialState);
  //
  const login = useSelector(getLogin);
  //
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, []);
  //
  const addPic = () => {
    console.log("add Pic");
  };
  //
  const renderItem = ({item}) => (
    <Item
      navigation={navigation}
      title={item.title}
      source={item.photo}
      photoLocation={item.photoLocation}
      currentLocation={item.currentLocation}
    />
  );
  //
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../../assets/imgBgReg.png")}
      >
        <View>
          <Avatar pic={state.avatar} press={addPic} />
          <View style={styles.formBox}>
            <Text style={styles.title}> {login} </Text>
            <SafeAreaView style={styles.container}>
              <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item, index) => index}
              />
            </SafeAreaView>
            <View style={styles.indicator}></View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  formBox: {
    alignItems: "center",
    // borderRadius: 25,
    backgroundColor: "#fff",
  },

  title: {
    marginTop: 30,
    fontFamily: "Roboto-500",
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
    paddingRight: 18,
    paddingLeft: 18,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    width: "91%",
    height: 50,
  },
  inputPass: {
    top: 9,
  },
  btn: {
    backgroundColor: "#FF6C00",
    height: 50,
    width: "91%",
    borderRadius: 25,
    marginTop: 40,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnTitle: {
    fontFamily: "Roboto-500",
    color: "#fff",
    fontSize: 18,
  },
  indicator: {
    marginTop: 46,
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    marginBottom: 7,
  },
  input_btn: {
    position: "absolute",

    top: 10,
    right: 16,
  },
  input__text: {
    fontSize: 14,
    color: "#a1a1a1",
  },
  link__text: {
    textAlign: "center",
    color: "#1B4371",
    fontFamily: "Roboto-400",
    fontSize: 16,
    lineHeight: 19,
  },
  onlyBox: {
    // position: "absolute",
    // top: -60,
    width: "80%",
    height: 150,
    borderColor: "#E8E8E8",
    borderRadius: 6,
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
  },
});
//
export default ProfileScreen;
