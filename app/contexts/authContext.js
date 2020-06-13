import CreateDataContext from "./createDataContext";
import { AsyncStorage } from "react-native";
import api from "../../api";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SUCCESS":
      return { ...state, error: "", token: action.payload, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    case "SIGNOUT":
      return {};
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async (data, navigate) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await api.post("/signup", { ...data });
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "SIGNUP_SUCCESS", payload: token });
      return navigate("Dashboard");
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: "There was an error signing up.",
      });
      return console.log(err.response.data);
    }
  };
};

const signin = (dispatch) => {
  return async (data, navigate) => {
    try {
      dispatch({ type: "LOADING" });
      const response = await api.post("/signin", { ...data });
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "SUCCESS", payload: token });
      return navigate("Dashboard");
    } catch (err) {
      dispatch({
        type: "ERROR",
        payload: "There was an error signin.",
      });
      return console.log(err.response.data);
    }
  };
};

const signout = (dispatch) => {
  return async (navigate) => {
    navigate("Welcome");
    await AsyncStorage.removeItem("token");
    alert("removed");
    dispatch({
      type: "SIGNOUT",
    });
  };
};

const persistAuth = (dispatch) => {
  return async (token) => {
    await dispatch({ type: "SUCCESS", payload: token });
  };
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signup, signin, signout, persistAuth },
  {
    auth: false,
  }
);
