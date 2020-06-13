import React, { useState } from "react";
import { Input, Text, Button } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const Auth = ({ type, header, buttonText, handleAuth, state, navigate }) => {
  const [data, setData] = useState({});
  const [validator, setValidator] = useState();

  const handleSubmit = () => {
    if (data.email && data.password) {
      setValidator("");
      return handleAuth(data, navigate);
    }
    return setValidator("All fields are required");
  };

  return (
    <View style={styles.container}>
      <Text h3 style={styles.heading}>
        {header}
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
      {type === "signup" && (
        <Input
          label="Name"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(name) => setData({ ...data, name })}
        />
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
        onPress={() => handleSubmit()}
        title={buttonText}
        buttonStyle={styles.signinBtn}
        loading={state.loading}
      />

      <Text style={styles.dont}>
        {type === "signin" ? "Don't" : "Already"} have an account ?
      </Text>

      <TouchableOpacity
        onPress={() => navigate(type === "signin" ? "Signup" : "Signin")}
        style={styles.link}
      >
        <Text style={styles.signup}>
          {type === "signin" ? "Sign Up" : "Sign In"}
        </Text>
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
    marginBottom: "15%",
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
  error: {
    margin: 10,
    textAlign: "center",
    color: "red",
  },
});

export default Auth;
