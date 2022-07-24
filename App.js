import React from 'react';
import {SplashScreen, OnBoarding, Login, SignUp, Home} from './app/screens/index';
import UITap from './app/navigation/UITap'
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
        <Stack.Screen
          options={{headerTitle: 'Test', headerShown: false}}
          name={'SignUp'}
          component={SignUp}
        />
        <Stack.Screen
          options={{headerTitle: 'Test', headerShown: false}}
          name={'Home'}
          component={Home}
        />
        <Stack.Screen
          options={{headerTitle: 'Test', headerShown: false}}
          name={'UITap'}
          component={UITap}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
