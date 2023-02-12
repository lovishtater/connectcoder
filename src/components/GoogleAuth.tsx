import React, {useEffect, useState} from 'react';
import {View, Text, Button, ActivityIndicator, Image,
Alert
} from 'react-native';
import {StyleSheet} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { removeData, storeData } from '../utils/asyncStorage';

function GoogleAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const signIn = async () => {
    try {
      setError(null);
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        storeData('token', JSON.stringify(userInfo));
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

//   const signOut = async () => {
//     try {
//       setLoading(true);
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//         removeData('token');
//     } catch (error) {
//         setError(error);
//     } finally {
//         setLoading(false);
//     }
//     };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '710186443690-fd8delk8f9376ho6mo7rduo1hog4bkv4.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Connect Coders</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.googleBtn} onTouchEnd={signIn}>
        <Image
          source={require('../../assets/google.png')}
          style={{width: 30, height: 30}}
        />
        <Text style={styles.btnText}>Sign in with Google</Text>
      </View>
      )}
    </View>
  );
}

export default GoogleAuth;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '50%',
    justifyContent: 'center',
    borderRadius:30,
    borderWidth: 3,
    borderColor:"#000",
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
