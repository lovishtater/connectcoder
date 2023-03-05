import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import contestReducer from './contest';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {PersistConfig} from 'redux-persist/es/types';

const persistConfig: any = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  // contest: contestReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
