//import liraries
import React, {Component, useState, useEffect, useContext} from 'react';
import {
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
import {CardMusic} from '../components';
import {AppContext} from '../contexts/AppContext';

const Search = ({navigation, route}) => {
  const [list, setList] = useState([]);
  const {getHomeZing, result, searchSong} = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [searchSongs, setSearchSongs]= useState('');
  const {navigate, goBack} = navigation;
  useEffect(() => {
    fetch(`https://nhatthanh.online/api/getinfoplaylist?idlist='6BU9U9DC'`)
      .then(res => res.json())
      .then(data => {
        setList(data.data.song.items);
      });
  }, []);
  useEffect(() => searchSong(searchSongs), [searchSongs]);
  console.log('kq', result);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.Neural100} barStyle="light-content" />
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
        <Text style={styles.textHeaderSearch}>Explore</Text>
        <TextInput
          onBlur={() => setSearchSongs(search)}
          value={search}
          onChangeText={text => {
            setSearch(text);
          }}
          style={[styles.textInput, {marginTop: 12}]}
          placeholderTextColor={colors.Neural60}
          placeholderStyle={styles.placeholderStyle}
          placeholder="Search song for name..."
        />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <FlatList
          data={result}
          renderItem={({item}) => (
            <CardMusic
              title={item.title}
              titleAuthor={item.artistsNames}
              img={item.thumbnailM}
              keyExtractor={eachSong => eachSong.encodeId}
            />
          )}
        />
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
export default Search;
