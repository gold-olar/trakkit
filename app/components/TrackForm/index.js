import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { Context as LocationContext } from "../../contexts/locationContext";
import useSaveTrak from "../../util/ops/useSaveTrak";

const TrackForm = ({ navigate }) => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrak] = useSaveTrak();

  const save = () => {
    saveTrak().then((success) =>
      success ? navigate("TrakList") : alert("failed")
    );
  };
  return (
    <>
      <View style={styles.formView}>
        <Input
          onChangeText={(name) => changeName(name)}
          value={name}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Trip Title"
          style={styles.inputField}
        />
        <Button
          onPress={() => (recording ? stopRecording() : startRecording())}
          style={styles.button}
          title={recording ? "Stop" : "Start Trakking"}
        />
        {locations.length > 0 && !recording && (
          <Button
            onPress={() =>
              !name ? alert("Please Enter a name for this track.") : save()
            }
            style={styles.button}
            title="Save Trakk"
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputField: {
    marginBottom: 5,
  },
  button: {
    margin: 5,
  },
  formView: {
    position: "relative",
    top: -150,
  },
});

export default TrackForm;
