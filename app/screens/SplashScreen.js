//import liraries
import React, {Component, useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {colors, img} from '../constants/index';
import {AppContext} from '../contexts/AppContext';

// create a component
const SplashScreen = ({navigation}) => {
  const {getDataFromStorage, initializing, user} = useContext(AppContext);
  const [timePassed, setTimePassed] = useState(false);
  console.log('userLogin', user)
  useEffect(() => {
    getDataFromStorage();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setTimePassed(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (timePassed && getDataFromStorage() !=null && user) {
      navigation.replace('UITap');
    }
    else if(timePassed) {
      navigation.replace('OnBoarding')
    }
    
  }, [timePassed, navigation]);

  return (
    <>
      <StatusBar backgroundColor={colors.Neural100} barStyle="light-content" />
      <View style={styles.container}>
        <Image style={styles.imgLogo} source={img.logoDark} />
        <Text style={styles.textVersion}>Version 1.0</Text>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.Neural100,
  },
  textVersion: {
    color: 'white',
    fontSize: 14,
  },
  imgLogo: {
    width: 160,
    height: 160,
  },
});

//make this component available to the app
export default SplashScreen;
