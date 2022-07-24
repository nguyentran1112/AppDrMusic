//import liraries
import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {Home, Search, Libary} from '../screens/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors, img} from '../constants/index';

const Tab = createBottomTabNavigator();

// create a component
const UITap = props => {
  const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarActiveBackgroundColor: colors.Neural100,
    tabBarInactiveBackgroundColor: colors.Neural100,
    tabBarInactiveTintColor: colors.Primary20,
    tabBarIcon: ({focused, color, size}) => {
      let screenName = route.name;
      let iconName = null;
      if (screenName == 'Search' && !focused) {
        iconName = img.iconSearched;
      } else if (screenName == 'Search' && focused) {
        iconName = img.iconSearchedBold;
      } else if (screenName == 'Libary' && !focused) {
        iconName = img.iconDocument;
      } else if (screenName == 'Libary' && focused) {
        iconName = img.iconDocumentBold;
      } else if (screenName == 'Home'&& !focused) {
        iconName = img.iconHome;
      }
      else if (screenName == 'Home'&& focused) {
        iconName = img.iconHomeBold;
      }
      return <Image source={iconName} style={styles.icon} />;
    },
  });
  return (
    <Tab.Navigator styele={{height: 51}} screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            marginBottom: 4,
            fontSize: 10,
            fontWeight: '400',
            lineHeight: 15,
          },
        }}
        name={'Home'}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: {
            marginBottom: 4,
            fontSize: 10,
            fontWeight: '400',
            lineHeight: 15,
          },
        }}
        name={'Search'}
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Libary',
          tabBarLabelStyle: {
            marginBottom: 4,
            fontSize: 10,
            fontWeight: '400',
            lineHeight: 15,
          },
        }}
        name={'Libary'}
        component={Libary}
      />
    </Tab.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  icon: {
    width: 18.03,
    height: 20,
  },
});

//make this component available to the app
export default UITap;
