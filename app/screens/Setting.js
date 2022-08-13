//import liraries
import React, {Component, useContext, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, img} from '../constants/index';
import {ButtonLg, AlertView} from '../components';
import {AppContext} from '../contexts/AppContext';
import {StackActions} from '@react-navigation/native';
// create a component
const Setting = props => {
  const [alertVisible, setAlertVisible] = useState(false);
  const changeAlert = bool => {
    setAlertVisible(bool);
  };
  const {navigation, routes} = props;
  const {navigate, goBack} = navigation;
  const {getDataFromStorage, signOutWithEmail} = useContext(AppContext);
  const [user, setUser] = useState([]);
  useEffect(() => {
    getDataFromStorage()
      .then(data => setUser(data))
      .catch(error => error);
  }, []);
  console.log(user);
  return (
    <View style={{backgroundColor: colors.Neural100, flex: 1}}>
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.iconSetting}
          onPress={() => {
            goBack();
          }}>
          <Image source={img.iconBack} />
        </TouchableOpacity>
        <Text style={styles.textHeading}>Settings</Text>
      </View>
      <View style={styles.formSetting}>
        <View style={styles.userDetail}>
          <Image
            style={{width: 72, height: 72, marginRight: 24, borderRadius: 36}}
            source={{uri: user.photoURL}}
          />
          <View style={{justifyContent: 'center'}}>
            <Text style={styles.userName}>
              {user.fullName ? user.fullName : user?.email}
            </Text>
            <Text style={styles.viewProfile}>View profile</Text>
          </View>
        </View>
        <View style={styles.separate}></View>
        <View style={styles.settingChoice}>
          <Text style={styles.settingText}>Notifications</Text>
        </View>
        <View style={styles.settingChoice}>
          <Text style={styles.settingText}>Data and Storages</Text>
        </View>
        <View style={styles.separate}></View>
        <View style={styles.settingChoice}>
          <Text style={styles.settingText}>Subscription</Text>
        </View>
        <View style={styles.settingChoice}>
          <Text style={styles.settingText}>Linked Account</Text>
        </View>
        <View style={styles.separate}></View>
        <TouchableOpacity
          style={styles.settingChoice}
          onPress={() => {
            setAlertVisible(true);
          }}>
          <Text style={styles.settingText}>About DrMusic</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <ButtonLg
          onPress={() => {
            signOutWithEmail();
            navigation.dispatch(StackActions.replace('SplashScreen'));
          }}
          colorText={colors.accentColor}
          title={'Log out'}
          borderColor={colors.accentColor}
          borderWidth={'1'}
        />
      </View>
      <AlertView
        changeAlert={changeAlert}
        title="About"
        messenge="DrMusic v1.0 Made by Chi Nguyen "
        alertVisible={alertVisible}
        icon={img.crown}
        color={colors.textColor}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  navbar: {
    justifyContent: 'center',
    width: '100%',
    height: 88,
  },
  textHeading: {
    alignSelf: 'center',
    color: colors.textColor,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    position: 'absolute',
    top: 54,
  },
  iconSetting: {
    position: 'absolute',
    left: 36,
    top: 54,
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.Neural100,
  },
  formSetting: {
    height: 453,
    width: '100%',
    //backgroundColor: 'red',
    marginTop: 12,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 28,
  },
  userDetail: {
    width: '100%',
    height: 104,
    paddingVertical: 16,
    paddingHorizontal: 32,
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: colors.Neural90,
    borderTopWidth: 1,
    // backgroundColor: 'red'
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: colors.textColor,
  },
  viewProfile: {
    fontSize: 12,
    lineHeight: 24,
    fontWeight: '400',
    color: colors.Primary20,
  },
  separate: {
    width: '100%',
    height: 28,
    backgroundColor: colors.Neural90,
  },
  settingChoice: {
    width: '100%',
    height: 53,
    borderBottomColor: colors.Neural90,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  settingText: {
    color: colors.textColor,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
  },
});

//make this component available to the app
export default Setting;
