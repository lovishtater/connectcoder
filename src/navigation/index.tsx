import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import LinkingConfiguration from './LinkingConfigs';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/types';
import MainTabNavigator from './MainTabNavigator';
import NotFoundScreen from '../screens/NotFound';
import ContestScreen from '../screens/Contest';
import AuthScreen from '../screens/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {INavigationProps} from '../types/interfaces';
import {useSelector} from 'react-redux';
import { getData } from '../utils/asyncStorage';
// import DrawerMenu from "./DrawerMenu";

const Navigation = (props: INavigationProps) => {
  const {colorScheme} = props;
  const user = useSelector((state: any) => state.auth.user);
  console.log('user', Object.keys(user));
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      linking={LinkingConfiguration as any}
      >
        {user.idToken ? <RootNavigator /> : <AuthNavigator />}
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
      initialRouteName={'Root'}>
          <Stack.Screen name={'Root'} component={MainTabNavigator} />
    </Stack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Auth'}>
      <Stack.Screen name={'Auth'} component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
