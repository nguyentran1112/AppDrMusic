//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors, img} from '../constants/index';

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Image style={styles.logoSmall} source={img.logoSmall} />
          <Text style={styles.textHeader}>Dr</Text>
          <Text style={styles.text}>Music.</Text>
        </View>
        <View>
          <Image style={styles.logoSetting} source={img.iconSetting} />
        </View>
      </View>
      <View style={styles.CategoryContainer}>
        <View style={styles.CategoryHeader}>
          <Text style={styles.textCategory}>Categories</Text>
          <Text style={styles.textSeeMore}>See more</Text>
        </View>
        <View >
          <TouchableOpacity style={styles.itemCategory}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Neural100,
  },
  textHeader: {
    color: 'white',
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
  },
  text: {
    color: 'white',
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '300',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: 117,
    alignItems: 'center',
  },
  logoSmall: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
  },
  logoSetting: {
    width: 24,
    height: 24,
    marginBottom: 10,
  },
  CategoryHeader: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 28,
    paddingRight: 20,
    //justifyContent: 'space-between',
  },
  textCategory: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: 'white',
    flexGrow: 1,
  },
  textSeeMore: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: colors.Primary20,
  },
  CategoryContainer: {
    width: 382,
    height: 80,
    marginTop: 40,
  },
  itemCategory: {
    backgroundColor: colors.Neural80,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  titleItemCategory: {
    fontSize: 16,
    lineHeight: 21,
    color: 'white'
  }
});

//make this component available to the app
export default Home;
