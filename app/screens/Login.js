//import liraries
import React, {useContext, Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {colors, img} from '../constants/index';
import {ButtonLg, ButtonSm, AlertView, Loading} from '../components';
import {isValidEmail, isValidPassword} from '../utilities';
import {AppContext} from '../contexts/AppContext';

// create a component
const Login = props => {
  //Navigation
  const {navigation, routes} = props;
  const {navigate, goBack} = navigation;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [borderColorInPutPW, setBorderColorInPutPW] = useState(colors.Neural90);
  const [borderColorInPutEmail, setBorderColorInPutEmail] = useState(
    colors.Neural90,
  );
  //check Validation
  const Validation = () => {
    return isValidEmail(email) && isValidPassword(password);
  };
  const {
    loadingAsync,
    user,
    signInWithEmail,
    signInWithGoogle,
    messenge,
    setAlertVisible,
    alertVisible,
    signInWithFB,
  } = useContext(AppContext);
  const changeAlert = bool => {
    setAlertVisible(bool);
  };

  useEffect(() => {
    if (user !== null) {
      navigate('UITap');
    }
  }, [user]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.Neural100} barStyle="light-content" />
      {loadingAsync?<Loading />:null}
      <Image style={styles.imgIcon} source={img.logoDark} />
      <View style={styles.formControl}>
        <Text style={styles.title}>Login to Your Account</Text>
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
        <View
          style={{
            marginLeft: 12,
            marginVertical: 8,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <CheckBox
            style={{marginRight: 12}}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            tintColors={{true: 'white', false: 'white'}}
          />
          <Text style={styles.whiteTextStyle}>Remember me</Text>
        </View>
        <View style={{marginVertical: 8}}>
          <ButtonLg
            onPress={async () => {
              await signInWithEmail(email, password);
              console.log(user);
            }}
            disabled={!Validation()}
            opacity={!Validation() ? 0.5 : 1}
            title={'Login'}
            color={colors.Primary}
            borderWidth={'0'}
            colorText={colors.textColor}
          />
        </View>
        <View style={styles.footerForm}>
          <Text style={styles.footerContent}>Forget Password ?</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.whiteTextStyle}>Or login with</Text>
        <View style={styles.socmedLogin}>
          <ButtonSm
            onPress={() => signInWithGoogle()}
            haveIcon={true}
            color={colors.Neural100}
            img={img.logoGoogle}
            borderColor={'white'}
            borderWidth={'1'}
          />
          <ButtonSm
            onPress={() => signInWithFB()}
            haveIcon={true}
            color={colors.Neural100}
            img={img.logoFacebook}
            borderColor={'white'}
            borderWidth={'1'}
          />
          <ButtonSm
            haveIcon={true}
            color={colors.Neural100}
            img={img.fingerprint}
            borderColor={'white'}
            borderWidth={'1'}
          />
        </View>
        <View style={styles.register}>
          <Text style={styles.whiteTextStyle}>Don't have an accoun't ?</Text>
          <TouchableOpacity onPress={() => navigate('SignUp')}>
            <Text
              style={[
                styles.whiteTextStyle,
                {color: colors.accentColor, marginLeft: 6},
              ]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        {alertVisible ? (
          <AlertView
            changeAlert={changeAlert}
            title={messenge.title}
            messenge={messenge.messenge}
            alertVisible={alertVisible}
            icon={messenge.icon}
            color={messenge.color}
          />
        ) : null}
        
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
    borderWidth: 1,
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
  checkbox: {
    width: 20,
    height: 20,
  },
});

//make this component available to the app
export default Login;
