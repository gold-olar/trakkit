import React from "react";
import { Input, Text, Button } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const SignIn = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.heading}>
        Welcome Back
      </Text>

      <Input label="Email" autoCapitalize="none" autoCorrect={false} />
      <Input label="Password" autoCapitalize="none" autoCorrect={false} />

      <Button
        onPress={() => navigate("Dashboard")}
        title="Sign In"
        buttonStyle={styles.signinBtn}
      />

      <Text style={styles.dont}>Don't have an account ?</Text>

      <TouchableOpacity onPress={() => navigate("Signup")} style={styles.link}>
        <Text style={styles.signup}> Sign Up </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 10,
  },
  heading: {
    color: "#EE005f",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: "30%",
    marginTop: "10%",
  },
  signinBtn: {
    fontWeight: "700",
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "#EE005F",
    fontSize: 26,
    marginTop: 10,
    padding: 5,
    margin: 10,
  },
  dont: {
    marginTop: 15,
    textAlign: "center",
  },
  signup: {
    marginTop: 5,
    textAlign: "center",
    color: "#EE005F",
    fontWeight: "700",
  },
});

SignIn.navigationOptions = {
  header: null,
};

export default SignIn;
