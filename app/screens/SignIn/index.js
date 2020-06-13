import React, { useContext } from "react";
import { Context as AuthContext } from "../../contexts/authContext";
import Auth from "../../components/Auth";

const SignIn = ({ navigation: { navigate } }) => {
  const { state, signin } = useContext(AuthContext);

  return (
    <Auth
      type="signin"
      header="Welcome Back"
      buttonText="SIGN IN"
      handleAuth={signin}
      state={state}
      navigate={navigate}
    />
  );
};

export default SignIn;
