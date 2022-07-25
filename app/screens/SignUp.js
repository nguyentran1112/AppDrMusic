//import liraries
import React, {Component, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import {colors, img} from '../constants/index';
import {ButtonLg, AlertView} from '../components';
import {isValidEmail, isValidPassword} from '../utilities';
import {AppContext} from '../contexts/AppContext';

// create a component
const SignUp = props => {
  const {error, setAlertVisible, alertVisible, createUserWithEmail} =
    useContext(AppContext);

  //Navigation
  const {navigation, routes} = props;
  const {navigate, goBack} = navigation;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [borderColorInPutName, setBorderColorInPutName] = useState(
    colors.Neural90,
  );
  const changeAlert = bool => {
    setAlertVisible(bool);
  };
  const [borderColorInPutPW, setBorderColorInPutPW] = useState(colors.Neural90);
  const [borderColorInPutEmail, setBorderColorInPutEmail] = useState(
    colors.Neural90,
  );

  //check Validation
  const Validation = () => {
    return isValidEmail(email) && isValidPassword(password) && name.length > 0;
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.Neural100}
          barStyle="light-content"
        />
        <Image style={styles.imgIcon} source={img.logoDark} />
        <View style={styles.formControl}>
          <Text style={styles.title}>Register</Text>
          <TextInput
            onBlur={() => setBorderColorInPutName(colors.Neural100)}
            onFocus={() => setBorderColorInPutName(colors.Primary)}
            value={name}
            onChangeText={text => {
              setName(text);
            }}
            style={[styles.textInput, {borderColor: borderColorInPutName}]}
            placeholderTextColor={colors.Neural60}
            placeholderStyle={styles.placeholderStyle}
            placeholder="Name"
          />
          <TextInput
            onBlur={() => setBorderColorInPutEmail(colors.Neural100)}
            onFocus={() => setBorderColorInPutEmail(colors.Primary)}
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
            style={[styles.textInput, {borderColor: borderColorInPutEmail}]}
            placeholderTextColor={colors.Neural60}
            placeholderStyle={styles.placeholderStyle}
            placeholder="Email"
          />
          <TextInput
            onBlur={() => setBorderColorInPutPW(colors.Neural100)}
            onFocus={() => setBorderColorInPutPW(colors.Primary)}
            value={password}
            secureTextEntry={true}
            onChangeText={text => {
              setPassword(text);
            }}
            style={[styles.textInput, {borderColor: borderColorInPutPW}]}
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
                onPress={() => {
                  createUserWithEmail(email, password);
                }}
                disabled={!Validation()}
                title={'Register'}
                color={colors.Primary}
                opacity={!Validation() ? 0.5 : 1}
                borderWidth={'0'}
              />
            </View>
            <View style={{marginVertical: 8}}>
              <ButtonLg
                title={'Cancel'}
                borderWidth={'1'}
                borderColor={'white'}
                onPress={() => {navigate('Login')}}
              />
            </View>
          </View>
        </View>
        {alertVisible ? (
          <AlertView
            changeAlert={changeAlert}
            title={'Error'}
            messenge={error}
            alertVisible={alertVisible}
            icon={img.error}
            color={'orange'}
          />
        ) : null}
      </View>
    </>
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
    borderWidth: 1,
    borderColor: colors.Neural90,
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
