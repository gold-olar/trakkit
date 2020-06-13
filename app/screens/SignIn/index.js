import React, { useState, useContext } from "react";
import { Input, Text, Button } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../../contexts/authContext";

const SignIn = ({ navigation: { navigate } }) => {
  const { state, signin } = useContext(AuthContext);
  const [validator, setValidator] = useState();
  const [data, setData] = useState({});

  const handleSignin = () => {
    if (data.email && data.password) {
      setValidator();
      return signin(data, navigate);
    }
    return setValidator("All fields are required");
  };
  return (
    <View style={styles.container}>
      <Text h3 style={styles.heading}>
        Welcome Back
      </Text>
      {state.error ? (
        <Text style={styles.error}> {state.error} </Text>
      ) : (
        <Text style={styles.error}> </Text>
      )}
      {validator ? (
        <Text style={styles.error}> {validator} </Text>
      ) : (
        <Text style={styles.error}> </Text>
      )}
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
        onPress={() => handleSignin()}
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
  error: {
    margin: 10,
    textAlign: "center",
    color: "red",
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
