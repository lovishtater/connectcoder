/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import {useColorScheme} from 'react-native';
import Navigation from './src/navigation';
import Colors from './src/constants/Colors';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
