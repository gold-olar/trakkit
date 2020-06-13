import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import Account from "../Account";
import TrackCreate from "../TrackCreate";
import TrackList from "../TrackList";

const icons = {
  tracklist: "ios-list-box",
  account: "ios-contact",
  trackcreate: "ios-create",
};

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={icons[route.name.toLowerCase()]}
              size={size}
              color={color}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "#EE005F",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="TrackList" component={TrackList} />
      <Tab.Screen name="TrackCreate" component={TrackCreate} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default Dashboard;
