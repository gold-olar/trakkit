import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Account from "../Account";
import TrackCreate from "../TrackCreate";
import TrackList from "../TrackList";

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="TrackCreate" component={TrackCreate} />
      <Tab.Screen name="TrackList" component={TrackList} />
    </Tab.Navigator>
  );
};

export default Dashboard;
