/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppContextProvider from './app/contexts/AppContext';
import Loading from './app/components/Loading';

AppRegistry.registerComponent(appName, () => () => (
  <AppContextProvider>
    <App />
    <Loading />
  </AppContextProvider>
));
