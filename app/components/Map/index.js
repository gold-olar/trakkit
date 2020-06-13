import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        initialRegion={{
          latitude: "6.465422",
          longitude: "3.406448",
          latitudeDelta: "0.1",
          longitudeDelta: "0.1",
        }}
        style={styles.mapStyle}
      />
      <View style={styles.createContent}>
        <Text> Space</Text>
      </View>
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
