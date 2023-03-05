import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Button,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import {signin} from '../actions/auth';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {removeData, setData} from '../utils/asyncStorage';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '../store';
import Snackbar from 'react-native-snackbar';

const AuthScreen = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation() as any;
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch() as any;
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '710186443690-fd8delk8f9376ho6mo7rduo1hog4bkv4.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
    if (user) {
      // navigation.navigate('Feed');
    }
  }, [user]);

  const onGoogleButtonPress = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo b', userInfo);
      dispatch(signin(userInfo));
      console.log('userInfo', userInfo);
      // navigation.navigate('Feed');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Snackbar.show({
          text: 'Signin cancelled',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Snackbar.show({
          text: 'Signin in progress',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Snackbar.show({
          text: 'Play services not available or outdated',
          duration: Snackbar.LENGTH_SHORT,
        });
      } else {
        Snackbar.show({
          text: 'Something went wrong',
          duration: Snackbar.LENGTH_SHORT,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Connect Coders</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.googleBtn} onTouchEnd={() => onGoogleButtonPress()}>
          <Image
            source={require('../../assets/google.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={styles.btnText}>Sign in with Google</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '50%',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#000',
    alignItems: 'center',
  },
  googleBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    margin: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  btnText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AuthScreen;
