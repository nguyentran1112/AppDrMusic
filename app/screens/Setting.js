//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors, img } from '../constants/index';
import { ButtonLg } from '../components';


// create a component
const Setting = (props) => {
    const { navigation, routes } = props;
    const { navigate, goBack } = navigation;
    return (
        <View style={{ backgroundColor: colors.Neural100, flex: 1 }}>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.iconSetting} onPress={() => { goBack() }}><Image source={img.iconBack} /></TouchableOpacity>
                <Text style={styles.textHeading}>Settings</Text></View>

            <View style={styles.formSetting}>
                <View style={styles.userDetail}>
                    <Image></Image>
                    <View>
                        <Text>kk</Text>
                        <Text>k</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <ButtonLg
                    colorText={colors.accentColor}
                    title={'Log out'}
                    borderColor={colors.accentColor}
                    borderWidth={'1'} />
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    navbar: {
        justifyContent: 'center',
        width: '100%',
        height: 88,
        backgroundColor: 'red',
    },
    textHeading: {
        alignSelf: 'center',
        color: colors.textColor,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500',
        position: 'absolute',
        top: 54
    },
    iconSetting: {
        position: 'absolute',
        left: 36,
        top: 54,
        width: 24,
        height: 24
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
        backgroundColor: 'red',
        marginTop: 12
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28
    },
    userDetail: {
        width: '100%',
        height: 104,
        paddingVertical: 16,
        paddingHorizontal: 32
    }
});

//make this component available to the app
export default Setting;
