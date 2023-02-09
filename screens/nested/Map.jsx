import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";
import MapView, {Marker} from "react-native-maps";
import * as Location from "expo-location";
//
console.log("MapsScreen!");
//
const Maps = ({route}) => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    const coords = {
      latitude: route.params.latitude,
      longitude: route.params.longitude,
    };
    setLocation(coords);
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...location,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        {location && (
          <Marker
            title="I am Groote"
            coordinate={location}
            description="Hello!"
          />
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
// export default MapScreen;
export default Maps;
