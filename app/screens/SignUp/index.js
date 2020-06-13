import React, { useState, useContext } from "react";
import { Input, Text, Button } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../../contexts/authContext";
import Auth from "../../components/Auth";
// import { NavigationEvents } from "react-navigation";
// has onWillBlur that you can use to clear err mssgs

const SignUp = ({ navigation: { navigate } }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <Auth
      type="signup"
      header="Start Trakkin"
      buttonText="SIGN UP"
      handleAuth={signup}
      state={state}
      navigate={navigate}
    />
  );
};

export default SignUp;
