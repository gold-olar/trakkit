import React, { useState } from "react";
import { Input, Text, Button } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const SignUp = ({ navigation: { navigate } }) => {
  const [data, setData] = useState({});
  return (
    <View style={styles.container}>
      <Text h3 style={styles.heading}>
        Start Trakkin
      </Text>

      <Input
        label="Name"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(name) => setData({ ...data, name })}
      />
      <Input
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(email) => setData({ ...data, email })}
      />
      <Input
        label="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(password) => setData({ ...data, password })}
      />

      <Button
        onPress={() => navigate("Signin")}
        title="Sign Up"
        buttonStyle={styles.signinBtn}
      />

      <Text style={styles.dont}>Already have an account ?</Text>

      <TouchableOpacity onPress={() => navigate("Signin")} style={styles.link}>
        <Text style={styles.signup}> Sign In </Text>
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

export default SignUp;
