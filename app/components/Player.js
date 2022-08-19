//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {img, colors} from '../constants/index';
// create a component
const Player = props => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 64, height: 64, marginRight: 12}}
        source={{uri: props.image}}
      />
      <View style={styles.Title}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 24,
            color: colors.textColor,
          }}>
          {props.nameSong}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            lineHeight: 24,
            color: colors.textColor,
            opacity: 0.5,
          }}>
          {props.nameSinger}
        </Text>
      </View>
      <TouchableOpacity
        onPress={props.onPress}
        style={{
          position: 'absolute',
          left: '84%',
          right: '5.33%',
          width: 33.33,
          height: 33.33,
          color: colors.textColor
        }}>
        <Image source={props.icon} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 82,
    backgroundColor: colors.Neural100,
    borderTopColor: 'blue',
    borderTopWidth: 3,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  Title: {
    display: 'flex',
    flexDirection: 'column',
  },
});

//make this component available to the app
export default Player;
