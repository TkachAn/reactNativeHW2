import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {Feather} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import {FontAwesome} from "@expo/vector-icons";
const initialPost = {
  photo: "",
  title: "",
  photoLocation: "",
  currentLocation: "",
};
const CreatePosts = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [shouldPublish, setShouldPublish] = useState(false);
  const [post, setPost] = useState(initialPost);
  const [errorMsg, setErrorMsg] = useState(null);
  //
  const photoHandler = (uri) => {
    setPost((prevState) => ({...prevState, photo: uri}));
    setShouldPublish(true);
  };
  const inputHandlerTitle = (title) => {
    setPost((prevState) => ({...prevState, title}));
    setShouldPublish(true);
  };
  const inputHandlerLocation = (photoLocation) => {
    setPost((prevState) => ({...prevState, photoLocation}));
    setShouldPublish(true);
  };
  const onFocusKeyboard = () => {
    setIsShowKeyboard(true);
  };
  const onCreate = () => {
    if (shouldPublish) {
      navigation.navigate("DefaultPostScreen", post);
      setPost(initialPost);
    }
  };

  const onDelete = () => {
    setPost(initialPost);
  };

  const onRemovePhoto = () => {
    setPost((prevState) => ({...prevState, photo: null}));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 16,
            backgroundColor: "#fff",
          }}
        >
          <View style={styles.photoContainer}>
            <View style={styles.container}></View>
            <Text>image</Text>
          </View>
          <View style={styles.loadPhoto}>
            <TouchableOpacity onPress={onRemovePhoto}>
              <Text>"Загрузите фото"</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={post.title}
              onChangeText={inputHandlerTitle}
              placeholder={"Название..."}
              placeholderTextColor={"#BDBDBD"}
              style={styles.input}
              onFocus={onFocusKeyboard}
              onBlur={() => setIsShowKeyboard(false)}
            />

            <View>
              <Feather
                name="map-pin"
                size={24}
                color="#BDBDBD"
                style={{position: "absolute"}}
              />
            </View>
            <TextInput
              value={post.photoLocation}
              onChangeText={inputHandlerLocation}
              placeholder={"Местность..."}
              placeholderTextColor={"#BDBDBD"}
              style={{...styles.input, paddingLeft: 28}}
              onFocus={onFocusKeyboard}
              onBlur={() => setIsShowKeyboard(false)}
            />
          </View>
          <TouchableOpacity
            style={
              shouldPublish
                ? styles.btn
                : {...styles.btn, backgroundColor: "#F6F6F6"}
            }
            onPress={onCreate}
          >
            <Text
              style={
                shouldPublish
                  ? styles.btn__text
                  : {...styles.btn__text, color: "#BDBDBD"}
              }
            >
              Опубликовать
            </Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "center",
              alignContent: "flex-end",
              paddingBottom: 34,
            }}
          >
            <TouchableOpacity
              style={{
                width: 70,
                height: 40,
                backgroundColor: "#F6F6F6",
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={onDelete}
            >
              <AntDesign name="delete" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  img: {
    width: 320,
    height: 240,
    borderWidth: 1,
    borderColor: "#888",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: "80%",
    // alignItems: "center",
    justifyContent: "center",
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
  container: {
    flex: 1,
  },
  photoContainer: {
    height: 240,
    width: "100%",
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  loadPhoto: {
    alignSelf: "flex-start",
    marginTop: 8,
  },
  loadPhoto_text: {
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inputContainer: {
    marginTop: 48,
    alignSelf: "flex-start",
    width: "100%",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    paddingBottom: 15,
    marginBottom: 32,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#FF6C00",
    padding: 16,
    borderRadius: 100,
    marginBottom: 16,
    width: "100%",
  },
  btn__text: {
    color: "#fff",
    fontFamily: "Roboto-400",
    fontSize: 16,
    lineHeight: 19,
  },
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
  },

  button: {alignSelf: "center", justifyContent: "center"},

  takePhotoOut: {
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#fff",
  },
});

export default CreatePosts;
