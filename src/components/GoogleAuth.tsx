import React, {useState} from 'react';
import {View, Text, Button, ActivityIndicator,
    Image

} from 'react-native';
import {StyleSheet} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '710186443690-fd8delk8f9376ho6mo7rduo1hog4bkv4.apps.googleusercontent.com',
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

function GoogleAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
      setUser(userInfo);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();

      setUser(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Connect Coders</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : user ? (
        <View>
          <Text>{user.user.email}</Text>
          <Button title="Sign Out" onPress={signOut} />
        </View>
      ) : (
       <GoogleAuthButton onPress={signIn} />
      )}
    </View>
  );
}

export default GoogleAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
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
    shadowOffset: { width: 0, height: 2 },
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
    fontWeight: "bold",
    color: '#000',
},
});


const GoogleAuthButton = ({onPress}) => {
    return (
        <View style={styles.googleBtn} onTouchEnd={onPress}>
        <Image
            source={require('../../assets/google.png')}
            style={{width: 30, height: 30}}
        />
        <Text style={styles.btnText}>Sign in with Google</Text>
        </View>
    );
};


    

