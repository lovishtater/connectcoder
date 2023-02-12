import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import LinkingConfiguration from "./LinkingConfigs";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import MainTabNavigator from "./MainTabNavigator";
import NotFoundScreen from "../screens/NotFound";
import HomeScreen from "../screens/Home";
import AuthScreen from "../screens/Auth";

import { INavigationProps } from "../types/interfaces";
// import DrawerMenu from "./DrawerMenu";

const Navigation = (props: INavigationProps) => {
  const { colorScheme } = props;

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    //   linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
    >
        {/* <Stack.Screen name={"Home"} component={MainTabNavigator} />
        <Stack.Screen name={"NotFound"} component={NotFoundScreen} /> */}
        <Stack.Screen name={"Auth"} component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
