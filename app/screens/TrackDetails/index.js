import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Context as TrakContext } from "../../contexts/trakkContext";
import getSingleTrack from "./helper";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

const TrackDetail = ({ route: { params } }) => {
  const { trakId } = params;
  const [trak, setTrak] = useState();
  const {
    state: { traks },
  } = useContext(TrakContext);

  useEffect(() => {
    traks && setTrak(getSingleTrack(traks, trakId));
  });

  return (
    <SafeAreaView style={styles.container}>
      {trak && (
        <>
          <MapView
            initialRegion={{
              ...trak.locations[0].coords,
              latitude: 6.46542,
              longitude: 3.406448,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            style={styles.mapStyle}
          >
            <Polyline
              coordinates={trak.locations.map((trakk) => trakk.coords)}
            />
          </MapView>
          <View style={styles.createContent}>
            <Text style={{ textAlign: "center", padding: 3 }} h3>
              {trak.name}
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    flex: 2,
  },
  createContent: {
    flex: 1,
  },
});

export default TrackDetail;
