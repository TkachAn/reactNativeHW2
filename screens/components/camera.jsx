import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
//
import * as Location from "expo-location";
import {Camera, CameraType} from "expo-camera";
import * as MediaLibrary from "expo-media-library";
//

import {FontAwesome} from "@expo/vector-icons";
//
const initialPost = {
  photo: "",
  title: "",
  photoLocation: "",
  currentLocation: "",
};
//
export const CreatePosts = ({navigation}) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [shouldPublish, setShouldPublish] = useState(false);
  const [post, setPost] = useState(initialPost);
  const [errorMsg, setErrorMsg] = useState(null);
  // Camera
  const [cameraRef, setCameraRef] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setPost((prevState) => ({
        ...prevState,
        currentLocation: location.coords,
      }));
      let text;
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }
    })();

    (async () => {
      requestPermission();
      await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{textAlign: "center"}}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const photoHandler = (uri) => {
    setPost((prevState) => ({...prevState, photo: uri}));
    setShouldPublish(true);
  };

  // const inputHandlerLocation = (photoLocation) => {
  //   setPost((prevState) => ({...prevState, photoLocation}));
  //   setShouldPublish(true);
  // };

  // const onCreate = () => {
  //   if (shouldPublish) {
  //     navigation.navigate("DefaultPosts", post);
  //     // navigation.navigate("ProfileScreen", posts);
  //     setPost(initialPost);
  //   }
  // };

  const onDelete = () => {
    setPost(initialPost);
  };

  const onRemovePhoto = () => {
    setPost((prevState) => ({...prevState, photo: null}));
  };

  //
  return (
    <View>
      <View style={styles.photoContainer}>
        <View style={styles.container}>
          {post.photo ? (
            <Image
              source={{uri: post.photo}}
              style={{height: "100%", width: "100%", borderRadius: 8}}
            />
          ) : (
            <Camera
              style={styles.camera}
              type={CameraType.back}
              ref={(ref) => {
                setCameraRef(ref);
              }}
              autoFocus={Camera.Constants.AutoFocus.on}
            >
              <View style={styles.photoView}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={async () => {
                    if (cameraRef) {
                      const {uri} = await cameraRef.takePictureAsync();
                      photoHandler(uri);
                      await MediaLibrary.createAssetAsync(uri);
                    }
                  }}
                >
                  <View style={styles.takePhotoOut}>
                    <FontAwesome name="camera" size={24} color="gray" />
                  </View>
                </TouchableOpacity>
              </View>
            </Camera>
          )}
        </View>
      </View>
      <View style={styles.loadPhoto}>
        <TouchableOpacity onPress={onRemovePhoto}>
          <Text style={styles.loadPhoto_text}>
            {post.photo ? "Редактировать фото" : "Загрузите фото"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  //
  photoContainer: {
    height: 240,
    width: "100%",
    marginTop: 32,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
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
  button: {
    alignSelf: "center",
    justifyContent: "center",
  },

  takePhotoOut: {
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#fff",
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
  //
});
