import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screens/Home";
import FeedScreen from "../screens/Feed";


const MainTab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <MainTab.Navigator
      initialRouteName={"Home"}
    >
      <MainTab.Screen name={"Home"} component={HomeScreen} />
      <MainTab.Screen name={"Feed"} component={FeedScreen} />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
