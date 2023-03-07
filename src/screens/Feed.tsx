import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Appbar from 'react-native-paper/lib/typescript/components/Appbar/Appbar';
import { COLORS } from '../constants';

const FeedScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      {/* <Appbar style={{backgroundColor: COLORS.primary}}>
        <Appbar.Content title="Feed" />
      </Appbar> */}
      <Text style={{color: 'white', fontSize: 30}}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FeedScreen;
