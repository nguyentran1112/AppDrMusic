//import liraries
import {colors, img} from '../constants/index';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const CardMusic = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: 311,
          height: 80,
          
        }}>
        <Image style={styles.img} source={{uri: props.img}} />
        <View
          style={{
            width: 215,
            height: 80,
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 16,
            marginVertical: 17,
           
          }}>
          <Text style={styles.titleName}>{props.title}</Text>
          <Text style={styles.titleAuthor}>{props.titleAuthor}</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: colors.Neural100,
    width: 335,
    height: 104,
    marginBottom: 4,
    padding: 12,
  },
  img: {
    height: 80,
    width: 80,
  },
  titleName: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: colors.textColor,
    marginBottom: 4,
  },
  titleAuthor: {
    fontSize: 12,
    lineHeight: 24,
    fontWeight: '500',
    color: colors.textColor,
  },
});

//make this component available to the app
export default CardMusic;
