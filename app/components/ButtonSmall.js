//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
const ButtonSmall = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, {backgroundColor: props.color}]}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 56,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  title: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
});

//make this component available to the app
export default ButtonSmall;
