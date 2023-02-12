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
import ContestScreen from "../screens/Contest";
import AuthScreen from "../screens/Auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { INavigationProps } from "../types/interfaces";
// import DrawerMenu from "./DrawerMenu";



const Navigation = (props: INavigationProps) => {
  const { colorScheme } = props;

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const checkAuth = async () => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }

    React.useEffect(() => {
        checkAuth();
    }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
    >
        {isAuthenticated ? (
            <>
        <Stack.Screen name={"Home"} component={MainTabNavigator} />
        <Stack.Screen name={"NotFound"} component={NotFoundScreen} />
        {/* <Stack.Screen name={"NotFound"} component={NotFoundScreen} /> */}
            </>
        ) : (
            <>
        <Stack.Screen name={"Auth"} component={AuthScreen} />
            </>
        )}
    </Stack.Navigator>
  );
};

export default Navigation;
