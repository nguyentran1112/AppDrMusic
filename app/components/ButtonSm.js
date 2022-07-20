//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

// create a component
const ButtonSm = props => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: props.colors,
          borderColor: props.borderColor,
          borderWidth: Number(props.borderWidth),
        },
      ]}>
      {props.haveTitle?(<Text style={styles.title}>{props.title}</Text>):null}
      {props.haveIcon?(<Image style={{height: 24, width: 24}} source={props.img}></Image>):null}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 87,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
});

//make this component available to the app
export default ButtonSm;
