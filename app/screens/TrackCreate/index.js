import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Map from "../../components/Map";
import {
  requestPermissionsAsync,
  Accuracy,
  watchPositionAsync,
} from "expo-location";
// import "../../_mockLocation";

const TrackCreate = () => {
  const [error, setError] = useState();
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => console.log(location)
      );
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <>
      <Map />
      {error && <Text> Please Enable location services </Text>}
    </>
  );
};

export default TrackCreate;
