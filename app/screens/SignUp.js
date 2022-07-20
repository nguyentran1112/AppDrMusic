//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {colors, img} from '../constants/index';
import CheckBox from 'react-native-check-box';
import {ButtonLg, ButtonSm} from '../components';

// create a component
const SignUp = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgIcon} source={img.logoDark} />
      <View style={styles.formControl}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={colors.Neural60}
          placeholderStyle={styles.placeholderStyle}
          placeholder="Name"
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={colors.Neural60}
          placeholderStyle={styles.placeholderStyle}
          placeholder="Email"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          placeholderTextColor={colors.Neural60}
          placeholderStyle={styles.placeholderStyle}
          placeholder="Password"
        />
        <View style={styles.policy}>
          <Text style={styles.whiteTextStyle}>
            By signing up, you agree to our
          </Text>
          <Text style={[styles.whiteTextStyle, {color: colors.accentColor}]}>
            {' '}
            Terms
          </Text>
          <Text style={styles.whiteTextStyle}>,</Text>
          <Text style={[styles.whiteTextStyle, {color: colors.accentColor}]}>
            Data Policy
          </Text>
          <Text style={styles.whiteTextStyle}> and</Text>
          <Text style={[styles.whiteTextStyle, {color: colors.accentColor}]}>
            {' '}
            Cookie Policy
          </Text>
        </View>
        <View>
          <View style={{marginVertical: 8}}>
            <ButtonLg
              title={'Register'}
              color={colors.Primary}
              borderWidth={'0'}
            />
          </View>
          <View style={{marginVertical: 8}}>
            <ButtonLg
              title={'Cancel'}
              color={colors.Neural100}
              borderWidth={'1'}
              borderColor={'white'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.Neural100,
  },
  imgIcon: {
    width: 120,
    height: 120,
    marginTop: 60,
    marginBottom: 24,
  },
  formControl: {
    width: 295,
    height: 449,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textColor,
    fontWeight: '600',
    paddingLeft: 8,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: colors.Neural90,
    borderRadius: 8,
    paddingVertical: 16,
    paddingLeft: 24,
    marginVertical: 8,
    width: 295,
    height: 53,
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },
  whiteTextStyle: {
    fontSize: 14,
    color: 'white',
    fontWeight: '400',
    lineHeight: 21,
  },
  policy: {
    display: 'flex',
    flexDirection: 'row',
    height: 58,
    width: 295,
    paddingVertical: 8,
    paddingLeft: 8,
    marginVertical: 8,
    flexWrap: 'wrap',
  },
});

//make this component available to the app
export default SignUp;
