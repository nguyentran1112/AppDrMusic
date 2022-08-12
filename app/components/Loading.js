import React,{useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {AppContext} from '../contexts/AppContext';
const Loading = () => {
  const {loadingAsync} = useContext(AppContext);
  if (loadingAsync) {
    return (
      <View style={[styles.container, StyleSheet.absoluteFillObject]}>
        <LottieView source={require('../assets/loader.json')} autoPlay loop />
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 2,
  },
});
export default Loading;
