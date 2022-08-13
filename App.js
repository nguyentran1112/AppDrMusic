import React from 'react';
import {
  ListSong,
  Setting,
  SplashScreen,
  OnBoarding,
  Login,
  SignUp,
  Home,
} from './app/screens/index';
import UITap from './app/navigation/UITap';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SystemNavigationBar from 'react-native-system-navigation-bar';

SystemNavigationBar.setNavigationColor('#0F0F29', true);
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
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
        <Stack.Screen
          options={{headerTitle: 'Test', headerShown: false}}
          name={'Setting'}
          component={Setting}
        />
        <Stack.Screen
          options={{headerTitle: 'Test', headerShown: false}}
          name={'ListSong'}
          component={ListSong}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
