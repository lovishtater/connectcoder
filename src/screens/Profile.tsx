import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {removeData, setData} from '../utils/asyncStorage';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {signout} from '../actions/auth';
import Snackbar from 'react-native-snackbar';
import {useAppDispatch} from '../hooks';

const FeedScreen = ({navigation}) => {
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const handleSignout = async () => {
    try {
      // await GoogleSignin.revokeAccess();
      // await GoogleSignin.signOut();
      dispatch(signout() as any);
      // navigation.navigate('Auth');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '710186443690-fd8delk8f9376ho6mo7rduo1hog4bkv4.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, [user]);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="Sign Out" onPress={() => handleSignout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bb3631',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FeedScreen;
