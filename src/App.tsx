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
import Navigation from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import store from './store'
import {persistStore} from 'redux-persist';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
let persistor = persistStore(store);
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <Navigation />
    </SafeAreaProvider>
    </PersistGate>
    </Provider>
  );
};

export default App;
