//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, StatusBar} from 'react-native';
import {colors, img} from '../constants/index';

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.Neural100} barStyle="light-content" />
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
        <View style={styles.Category}>
          <TouchableOpacity style={styles.itemCategory}>
            <Text style={styles.titleItemCategory}>Art</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemCategory}>
            <Text style={styles.titleItemCategory}>Art</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemCategory}>
            <Text style={styles.titleItemCategory}>Music</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.playListContainer}>
        <View style={styles.playListHeader}>
          <Text style={styles.textCategory}>Recommended for you</Text>
          <Text style={styles.textRecommended}>See more</Text>
        </View>
        <View style={styles.playLists}>
          <Image style={styles.imgPlayList} source={img.imgPlayList} />
          <Image style={styles.imgPlayList} source={img.imgPlayList} />
        </View>
      </View>
      <View style={styles.playListContainer}>
        <View style={styles.playListHeader}>
          <Text style={styles.textCategory}>Best seller</Text>
          <Text style={styles.textRecommended}>See more</Text>
        </View>
        <View style={styles.playLists}>
          <Image style={styles.imgPlayList} source={img.imgPlayList} />
          <Image style={styles.imgPlayList} source={img.imgPlayList} />
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
  playListContainer: {
    width: 416,
    height: 340,
    marginTop: 32,
    paddingLeft: 28,
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
    paddingLeft: 28,
    width: 375,
    height: 88,
    paddingRight: 10
    
  },
  logoSetting: {
    width: 24,
    height: 24,
    marginBottom: 10,
    marginTop: 28,
  },
  CategoryHeader: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 28,
    paddingRight: 20,
    //justifyContent: 'space-between',
  },
  playListHeader: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 20,
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
  textRecommended: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '500',
    color: colors.Primary20,
    marginRight: 32,
  },

  CategoryContainer: {
    width: 382,
    height: 80,
    marginTop: 18,
  },
  itemCategory: {
    backgroundColor: colors.Neural80,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginRight: 12,
  },
  titleItemCategory: {
    fontSize: 16,
    lineHeight: 21,
    color: 'white',
  },
  Category: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 28,
    marginTop: 16,
  },
  imgPlayList: {
    width: 200,
    height: 300,
    marginRight: 16,
  },
  playLists: {display: 'flex', flexDirection: 'row', marginTop: 12},
});

//make this component available to the app
export default Home;
