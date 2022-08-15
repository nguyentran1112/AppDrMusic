//import liraries
import React, {Component, useState, useEffect, useContext} from 'react';
import SoundPlayer from 'react-native-sound-player';
import {
  Alert,
  TextInput,
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {colors, img} from '../constants/index';
import {CardMusic, Loading, Player} from '../components';
import {AppContext} from '../contexts/AppContext';
const Libary = ({navigation, route}) => {
  const {
    list,
    getInfoPlaylist,
    loadingAsync,
    song,
    link,
    getSong,
    getLink,
    currentIndex,
    setCurrentIndex,
    loadSong,
  } = useContext(AppContext);
  const {navigate, goBack} = navigation;
  const [hidden, setHidden] = useState(true);

  useEffect(loadSong, [currentIndex]);
  const playMusic = link => {
    try {
      // or play from url
      SoundPlayer.playUrl(link.toString());
    } catch (e) {
      console.log(`cannot play the sound file`, e);
    }
  };
  useEffect(()=> {
    playMusic(link);
  },[link])
  console.log(link);
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.Neural100}
          barStyle="light-content"
        />

        {loadingAsync ? <Loading /> : null}
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <Image style={styles.logoSmall} source={img.logoSmall} />
            <Text style={styles.textHeader}>Dr</Text>
            <Text style={styles.text}>Music.</Text>
          </View>
          <TouchableOpacity onPress={() => navigate('Setting')}>
            <Image style={styles.logoSetting} source={img.iconSetting} />
          </TouchableOpacity>
        </View>
        <View style={[styles.searchContainer, {marginBottom: 16}]}>
          <Text style={styles.textHeaderSearch}>Songs</Text>
          <TextInput
            onChangeText={text => {
              text;
            }}
            style={[styles.textInput, {marginTop: 12}]}
            placeholderTextColor={colors.Neural60}
            placeholderStyle={styles.placeholderStyle}
            placeholder="Search song for name..."
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <FlatList
            data={list}
            renderItem={({item, index}) => (
              <CardMusic
                onPress={() => {
                  setHidden(false);
                  setCurrentIndex(index);
                  
                }}
                title={item.title}
                titleAuthor={item.artistsNames}
                img={item.thumbnailM}
                keyExtractor={eachSong => eachSong.key}
              />
            )}
          />
        </View>
      </View>
      <Player
        nameSong={song.title}
        nameSinger={song.artistsNames}
        image={song.thumbnailM}
      />
    </>
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
  textHeaderSearch: {
    color: 'white',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '600',
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
    height: 340,
    marginTop: 32,
    paddingLeft: 28,
  },
  playListContainerText: {
    width: 416,
    height: 260,
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
    paddingRight: 10,
  },
  logoSetting: {
    width: 24,
    height: 24,
    marginBottom: 10,
    marginTop: 28,
  },
  searchContainer: {
    width: 335,
    height: 101,
    //justifyContent: 'center',
    alignSelf: 'center',
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },
  textInput: {
    backgroundColor: colors.Neural90,
    borderRadius: 8,
    paddingVertical: 16,
    paddingLeft: 24,
    marginVertical: 8,
    width: 335,
    height: 53,
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
});

//make this component available to the app
export default Libary;
