import React, {useState} from 'react';
import {SplashScreen, OnBoarding, Login} from './app/screens/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
         options={{headerTitle: 'Test', headerShown: false}}
         name={'SplashScreen'}
         component={SplashScreen}
       />
        <Stack.Screen
          options={{headerTitle: 'Test', headerShown: false}}
          name={'OnBoarding'}
          component={OnBoarding}
        />
        <Stack.Screen
          options={{headerTitle: 'Test', headerShown: false}}
          name={'Login'}
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
