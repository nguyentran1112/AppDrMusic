import React from 'react';
import {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {colors, img} from '../constants/index';
export const AppContext = createContext({});

const AppContextProvider = ({children}) => {
  const [messenge, setMessenge] = useState({
    title: '',
    messenge: '',
    icon: null,
  });
  const [loadingAsync, setLoadingAsync] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  /*SIGNIN - SIGNOUT*/
  //handle user state change
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const signInWithEmail = (email, password) => {
    setLoadingAsync(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User account signed in!');
        const dataUser = userCredential.user;
        const fullName = (dataUser?.displayName ?? '').trim();
        const email = (dataUser?.email ?? '').trim();
        const photoURL = (
          dataUser?.photoURL ??
          'https://firebasestorage.googleapis.com/v0/b/drmusic-69096.appspot.com/o/avatar.png?alt=media&token=1ec8a4cf-2737-48ac-9f50-826f8b48721a'
        ).trim();
        const dataUserTemp = {
          photoURL: photoURL,
          fullName: fullName,
          email: email,
          userType: 'email&password',
        };
        setUser(dataUserTemp);
        saveUserToStorage(dataUserTemp);
        setLoadingAsync(false);
      })
      .catch(messenge => {
        if (messenge.code === 'auth/wrong-password') {
          setMessenge({
            title: 'Error',
            messenge: 'Wrong password',
            icon: img.error,
            color: '#FF8C00',
          });
         
          setAlertVisible(true);
          console.log('Wrong password!');
          setLoadingAsync(false);
          
        }
        if (messenge.code === 'auth/user-not-found') {
          setMessenge({
            title: 'Error',
            messenge: 'User not found!',
            icon: img.error,
            color: '#FF8C00',
          });
          setAlertVisible(true);
          console.log('User not found!');
          setLoadingAsync(false);
        }
        console.log(messenge);
      });
  };

  const createUserWithEmail = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(messenge => {
        if (messenge.code === 'auth/email-already-in-use') {
          setMessenge({
            title: 'Error',
            messenge: 'That email address is already in use!',
            icon: img.error,
            color: 'orange',
          });
          setAlertVisible(true);
          console.log('That email address is already in use!');
        }
        if (messenge.code === 'auth/invalid-email') {
          setMessenge({
            title: 'Error',
            messenge: 'That email address is invalid!',
            icon: img.error,
            color: 'orange',
          });
          setAlertVisible(true);
          console.log('That email address is invalid!');
        }
      });
  };

  const signInWithGoogle = async () => {
    setLoadingAsync(true);
    await GoogleSignin.configure({
      webClientId:
        '326759469684-logvka8j9itr0vptnk1cvadl6tsu92lr.apps.googleusercontent.com',
      scopes: [],
    });
    const {idToken} = await GoogleSignin.signIn().catch(e => {
      setMessenge(e.messenge);
    });
    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        const dataUser = res.user;
        const fullName = (dataUser?.displayName ?? '').trim();
        const email = (dataUser?.email ?? '').trim();
        const photoURL = (dataUser?.photoURL ?? '').trim();
        const dataUserTemp = {
          photoURL: photoURL,
          fullName: fullName,
          email: email,
          userType: 'google',
        };
        console.log(dataUserTemp);
        setLoadingAsync(false);
        setUser(dataUserTemp);
        saveUserToStorage(dataUserTemp);
      })
      .catch(e => {
        setLoadingAsync(false);
        setMessenge({
          title: 'Error',
          messenge: e.messenge,
          icon: img.error,
          color: 'orange',
        });
        setAlertVisible(true);
      });
    const accessToken = await (await GoogleSignin.getTokens()).accessToken;
  };

  const signInWithFB = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  };
  const signOutWithEmail = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  //set & get data to Storage
  const saveUserToStorage = async user => {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  };

  const getDataFromStorage = async () => {
    let stringUser = await AsyncStorage.getItem('user');
    return JSON.parse(stringUser);
  };

  // Load data from API zingmp3
  const [home, setHome] = useState([]);
  const [banner, setBanner] = useState([]);
  const [list, setList] = useState([]);
  const [listTop100, setListTop100] = useState(null);
  const [result, setResult] = useState([]);

  //
  const getHomeZing = () => {
    fetch(`https://nhatthanh.online/api/gethome`)
      .then(res => res.json())
      .then(data => {
        setHome(data.data.items);
        setBanner(data.data.items[0].items);
      });
  };

  const getInfoPlaylist = id => {
    fetch(`https://nhatthanh.online/api/getinfoplaylist?idlist=${id}`)
      .then(res => res.json())
      .then(data => {
        setList(data.data.song.items);
      });
  };
  const getListTop100 = () => {
    fetch('https://nhatthanh.online/api/gettop100')
      .then(response => response.json())
      .then(data => {
        setListTop100(data.data[0].items);
      });
  };

  const searchSong = name => {
    fetch(`https://nhatthanh.online/api/searchsong?value=${name}`).then(
      response => response.json())
      .then(data => setResult(data.data.songs))
  };
  const appContextData = {
    result,
    searchSong,
    initializing,
    banner,
    getListTop100,
    listTop100,
    getHomeZing,
    home,
    loadingAsync,
    user,
    messenge,
    setUser,
    setMessenge,
    alertVisible,
    setAlertVisible,
    signInWithGoogle,
    signInWithEmail,
    signOutWithEmail,
    createUserWithEmail,
    signInWithFB,
    getDataFromStorage,
  };
  return (
    <AppContext.Provider value={appContextData}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
