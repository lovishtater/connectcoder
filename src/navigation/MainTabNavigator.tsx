import React, {useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Contest';
import FeedScreen from '../screens/Feed';
import ProfileScreen from '../screens/Profile';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/types';

const MainTab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
  const user = useSelector((state: any) => state.user);
  const navigation = useNavigation();
  return (
    <MainTab.Navigator
      initialRouteName={'Home'}
      activeColor="#FCFDF2"
      inactiveColor="#C1AEFC"
      barStyle={{
        backgroundColor: '#472183',
        padding: 0,
        margin: 0,
        height: 70,
      }}>
      <MainTab.Screen
        name={'Feed'}
        component={FeedScreen}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="application-brackets"
              color={focused ? '#FF5F7E' : '#C1AEFC'}
              size={20}
            />
          ),
        }}
      />
      <MainTab.Screen
        name={'Contest'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Contest',
          tabBarIcon: ({color, focused}) => (
            <MaterialCommunityIcons
              name="trophy-award"
              color={focused ? '#FFAB4C' : '#C1AEFC'}
              size={20}
            />
          ),
        }}
      />
      <MainTab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
