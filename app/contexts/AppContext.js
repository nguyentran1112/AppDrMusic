import React from 'react';
import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const AppContext = createContext({});

const AppContextProvider = ({children}) => {
  const [error, setError] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  /*SIGNIN - SIGNOUT*/
  const signInWithEmail = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          setError('Wrong password!');
          setAlertVisible(true);
          console.log('Wrong password!');
        }
        if (error.code === 'auth/user-not-found') {
          setError('User not found!');
          setAlertVisible(true);
          console.log('User not found!');
        }
        console.error(error);
      });
  };

  const appContextData = {};
  return (
    <AppContext.Provider value={appContextData}>{children}</AppContext.Provider>
  );
};
