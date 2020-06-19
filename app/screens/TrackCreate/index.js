import "../../_mockLocation";
import React, { useContext } from "react";
import { Text } from "react-native";
import Map from "../../components/Map";
import { useIsFocused } from "@react-navigation/native";

import { Context as LocationContext } from "../../contexts/locationContext";
import useLocation from "../../util/ops/useLocation";
import TrackForm from "../../components/TrackForm";
import { useCallback } from "react";
import { call } from "react-native-reanimated";

const TrackCreate = ({ navigation: { navigate } }) => {
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);
  const isFocused = useIsFocused();
  // console.log(isFocused, "focus");
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );
  const [error] = useLocation(isFocused || recording, callback);

  return (
    <>
      <Map />
      {error && <Text> Please Enable location services </Text>}
      <TrackForm navigate={navigate} />
    </>
  );
};

export default TrackCreate;
