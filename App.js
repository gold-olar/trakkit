// import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignIn from "./app/screens/SignIn";
import SignUp from "./app/screens/SignUp";
import Welcome from "./app/screens/Welcome";
import Dashboard from "./app/screens/Dashboard";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer initialRouteName="Welcome">
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#EE005F",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            textTransform: "uppercase",
          },
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Signin" component={SignIn} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
