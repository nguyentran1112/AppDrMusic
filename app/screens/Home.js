//import liraries
import React, {Component, useEffect, useState, useContext} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {colors, img} from '../constants/index';
import {AppContext} from '../contexts/AppContext';
import {ImgLoading, Loading} from '../components';
// create a component
const Home = props => {
  const {navigation, routes} = props;
  const {navigate, goBack} = navigation;
  const [newRelease, setNewRelease] = useState([]);
  const [recommend, setRecommned] = useState([]);

  const {getHomeZing, listTop100, getListTop100, home, banner, loadingAsync} =
    useContext(AppContext);
  const checkDate = () => {
    const date = new Date();
    const current_day = date.getDay();
    return current_day;
  };

  useEffect(getListTop100, []);
  useEffect(getHomeZing, []);
  useEffect(() => {
    setNewRelease(
      home
        .filter(home => home.title === 'Mới phát hành')
        .map(home => home.items[0].album),
    );
  }, [home]);
  useEffect(() => {
    if (checkDate() >= 6) {
      setRecommned(
        home
          .filter(home => home.title === 'Cuối Tuần Lên Nhạc')
          .map(home => home.items),
      );
    } else {
      setRecommned(
        home
          .filter(home => home.title === 'Lựa chọn hôm nay')
          .map(home => home.items),
      );
    }
  }, [home]);

  return (
    <>
    {loadingAsync?<Loading />:null}
    <ScrollView>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.Neural100}
          barStyle="light-content"
        />
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
        <View style={styles.CategoryContainer}>
          <View style={styles.Category}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={banner}
              renderItem={({item}) => {
                return (
                  <Image
                    style={styles.imgBanner}
                    source={{uri: item.banner.toString()}}
                  />
                );
              }}
              keyExtractor={eachBanner => eachBanner.banner.toString()}
            />
          </View>
        </View>
        <View style={styles.playListContainer}>
          <View style={styles.playListHeader}>
            <Text style={styles.textCategory}>New Releases</Text>
            <Text style={styles.textRecommended}>See more</Text>
          </View>
          <View style={styles.playLists}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={newRelease[0]}
              renderItem={({item}) => {
                return (
                  <Image
                    style={styles.imgPlayList}
                    source={{uri: item.thumbnailM.toString()}}
                  />
                );
              }}
              keyExtractor={eachPlayList => eachPlayList.encodeId}
            />
          </View>
        </View>
        <View style={styles.playListContainerText}>
          <View style={styles.playListHeader}>
            <Text style={styles.textCategory}>Today's Choice</Text>
            <Text style={styles.textRecommended}>See more</Text>
          </View>
          <View style={styles.playListsRanking}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={recommend[0]}
              renderItem={({item}) => {
                //console.log(item);
                return (
                  <View style={{width: 160, marginRight: 16}}>
                    <Image
                      style={styles.imgPlayListRanking}
                      source={{uri: item.thumbnail.toString()}}
                    />
                    <Text style={[styles.textTitle, {marginTop: 12}]}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              keyExtractor={eachPlayList => eachPlayList.encodeId}
            />
          </View>
        </View>
        <View style={styles.playListContainerText}>
          <View style={styles.playListHeader}>
            <Text style={styles.textCategory}>Top 100</Text>
            <Text style={styles.textRecommended}>See more</Text>
          </View>
          <View style={styles.playListsRanking}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={listTop100}
              renderItem={({item}) => {
                //console.log(item);
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigate('ListSong', {key: item.encodeId});
                    }}
                    style={{width: 160, marginRight: 16}}>
                    <Image
                      style={styles.imgPlayListRanking}
                      source={{uri: item.thumbnailM.toString()}}
                    />
                    <Text style={[styles.textTitle, {marginTop: 12}]}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={eachPlayList => eachPlayList.encodeId}
            />
          </View>
        </View>
      </View>
    </ScrollView>
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
  textTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: colors.textColor,
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
    height: 180,
    marginTop: 18,
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
  imgBanner: {
    width: 320,
    height: 180,
    marginRight: 16,
    borderRadius: 12,
  },
  imgPlayListRanking: {
    width: 160,
    height: 160,
  },
  playLists: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    height: 340,
  },
  playListsRanking: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
    height: 220,
  },
});

//make this component available to the app
export default Home;
