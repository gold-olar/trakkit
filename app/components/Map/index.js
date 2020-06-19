import React, { useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../../contexts/locationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size={"large"} style={{ flex: 1 }} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {currentLocation && (
        <MapView
          initialRegion={{
            ...currentLocation.coords,
            latitude: 6.46542,
            longitude: 3.406448,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          // region={{ ...currentLocation.coords }}
          style={styles.mapStyle}
        >
          <Circle
            center={{ ...currentLocation.coords }}
            radius={300}
            strokeColor="rgba(158,158,255,1.0)"
            fillColor="rgba(158,158,255,0.3)"
          />
          <Polyline
            coordinates={locations && locations.map((loc) => loc.coords)}
          />
        </MapView>
      )}
      <View style={styles.createContent}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    // width: Dimensions.get("window").width,
    flex: 2,
  },
  createContent: {
    flex: 1,
  },
});

export default Map;
