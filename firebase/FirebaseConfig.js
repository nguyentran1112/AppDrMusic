import * as firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyC8JKxTHzYsnMVUEDs-_RiLqAdbscA_4nw',
  authDomain: 'drmusic-69096.firebaseapp.com',
  databaseURL:
    'https://drmusic-69096-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'drmusic-69096',
  storageBucket: 'drmusic-69096.appspot.com',
  appId: '1:326759469684:android:1c43094df4e6b82dee3721',
  messagingSenderId: '326759469684',
};
export const firebaseApp = firebase.initializeApp(config);

