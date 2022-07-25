import React from 'react';
import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

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

  const createUserWithEmail = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setError('That email address is already in use!');
          setAlertVisible(true);
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
          setAlertVisible(true);
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  const signInWithGoogle = async () => {
    await GoogleSignin.configure({
      webClientId:
        '326759469684-logvka8j9itr0vptnk1cvadl6tsu92lr.apps.googleusercontent.com',
      scopes: [],
    });
    const {idToken} = await GoogleSignin.signIn().catch(e => {
      Alert.alert(e.message);
    });
    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        // Alert.alert('UserData', JSON.stringify(res));
        console.log(res);
      })
      .catch(e => {
        // Alert.alert(e.message);
      });
    const accessToken = await (await GoogleSignin.getTokens()).accessToken;
  };

  const signInWithFB = async () => {
    // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
  }
  const signOutWithGoogle = async () => {};

  const appContextData = {
    error,
    setError,
    alertVisible,
    setAlertVisible,
    signInWithGoogle,
    signInWithEmail,
    signOutWithGoogle,
    createUserWithEmail,
    signInWithFB
  };
  return (
    <AppContext.Provider value={appContextData}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
