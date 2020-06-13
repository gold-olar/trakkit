import React, { useEffect, useContext } from "react";
import { AsyncStorage } from "react-native";
import {
  ImageBackground,
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Context as AuthContext } from "../../contexts/authContext";

const image = {
  uri:
    "https://images.pexels.com/photos/2422483/pexels-photo-2422483.jpeg?cs=srgb&dl=photo-of-woman-sitting-while-pointing-on-world-map-2422483.jpg&fm=jpg",
};

const Welcome = ({ navigation: { navigate } }) => {
  const { persistAuth } = useContext(AuthContext);
  const getPage = async () => {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      return "Signin";
    }
    persistAuth(token);
    return "Dashboard";
  };

  // useEffect(() => {
  //  .then((auth) => auth && navigate("Dashboard"));
  // }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          blurRadius={20}
          source={image}
          style={styles.background}
        >
          <View style={styles.logoContainer}>
            <Text style={styles.trak}>
              {" "}
              TRAK<Text style={styles.kit}>KIT</Text>{" "}
            </Text>
            <Image
              style={styles.logo}
              source={require("../../assets/icon.png")}
            />
            <Text style={styles.headerText}> Record your travel motions </Text>
          </View>
          <TouchableOpacity
            onPress={async () => navigate(await getPage())}
            style={styles.getStarted}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  getStarted: {
    width: "100%",
    height: 50,
    backgroundColor: "#EE005F",
    alignItems: "center",
    justifyContent: "center",
  },
  getStartedText: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  logo: {
    width: 100,
    height: 100,
    paddingBottom: 5,
  },
  logoContainer: {
    position: "absolute",
    top: "30%",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 20,
  },
  trak: {
    fontWeight: "900",
    color: "#EE005F",
    fontSize: 40,
    marginBottom: 15,
  },
  kit: {
    color: "white",
  },
});

export default Welcome;
