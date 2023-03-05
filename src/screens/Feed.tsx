import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const FeedScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{color: 'white', fontSize: 30}}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dc3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FeedScreen;
