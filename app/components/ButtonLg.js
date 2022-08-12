//import liraries
import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../constants/index';

// create a component
const ButtonLg = props => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          opacity: props.opacity,
          backgroundColor: props.color,
          borderColor: props.borderColor,
          borderWidth: Number(props.borderWidth),
        },
      ]}
      disabled={props.disabled}
      onPress={props.onPress}>
      <Text style={[styles.title, {color: props.colorText}]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 295,
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
export default ButtonLg;
