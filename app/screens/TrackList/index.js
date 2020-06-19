import React, { useEffect } from "react";
import { SafeAreaView, Text, TouchableHighlight } from "react-native";
import { ListItem, Header } from "react-native-elements";
import { Context as TrakContext } from "../../contexts/trakkContext";
import { useContext } from "react";
import { ScrollView } from "react-native-gesture-handler";

const TrackList = ({ navigation: { navigate } }) => {
  const {
    fetchTraks,
    state: { traks },
  } = useContext(TrakContext);

  useEffect(() => {
    fetchTraks();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header
          backgroundColor={"#EE005F"}
          centerComponent={{
            text: "Trak List",
            style: {
              color: "#fff",
              fontSize: 20,
              alignContent: "center",
              padding: "auto",
              textTransform: "uppercase",
            },
          }}
        />
        {traks.map((trak, i) => (
          <TouchableHighlight
            onPress={() => navigate("TrakDetails", { trakId: trak._id })}
            key={i}
          >
            <ListItem title={trak.name} bottomDivider />
          </TouchableHighlight>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TrackList;
