//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import {colors, img} from '../constants/index';
import CheckBox from 'react-native-check-box';
import {ButtonLg, ButtonSm} from '../components';

// create a component
const Login = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log(toggleCheckBox);
  return (
    <View style={styles.container}>
      <Image style={styles.imgIcon} source={img.logoDark} />
      <View style={styles.formControl}>
        <Text style={styles.title}>Login to Your Account</Text>
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
        <View style={{marginLeft: 12, marginVertical: 8}}>
          <CheckBox
            checkBoxColor={'white'}
            rightTextStyle={styles.whiteTextStyle}
            onClick={() => {
              setToggleCheckBox(toggleCheckBox => !toggleCheckBox);
            }}
            isChecked={toggleCheckBox}
            rightText={'Remember me'}
          />
        </View>
        <View style={{marginVertical: 8}}>
          <ButtonLg title={'Login'} color={colors.Primary} borderWidth={'0'} />
        </View>
        <View style={styles.footerForm}>
          <Text style={styles.footerContent}>Forget Password ?</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.whiteTextStyle}>Or login with</Text>
        <View style={styles.socmedLogin}>
          <ButtonSm
            haveIcon={true}
            color={colors.Neural100}
            img={img.logoGoogle}
            borderColor={'white'}
            borderWidth={'1'}
          />
          <ButtonSm
            haveIcon={true}
            color={colors.Neural100}
            img={img.logoFacebook}
            borderColor={'white'}
            borderWidth={'1'}
          />
          <ButtonSm
            haveIcon={true}
            color={colors.Neural100}
            img={img.logoGoogle}
            borderColor={'white'}
            borderWidth={'1'}
          />
        </View>
        <View style={styles.register}>
          <Text style={styles.whiteTextStyle}>Don't have an accoun't ?</Text>
          <Text
            style={[
              styles.whiteTextStyle,
              {color: colors.accentColor, marginLeft: 6},
            ]}>
            Register
          </Text>
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
    height: 316,
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
  footerForm: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 4,
  },
  footerContent: {
    color: colors.accentColor,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
  },
  footer: {
    alignItems: 'center',
    marginTop: 32,
  },
  socmedLogin: {
    width: 293,
    height: 56,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  register: {display: 'flex', flexDirection: 'row', marginTop: 24},
});

//make this component available to the app
export default Login;
