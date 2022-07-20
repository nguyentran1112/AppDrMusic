//import liraries
import React, {Component, useState, useRef} from 'react';
import {
  TouchableOpacity,
  Dimensions,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import {colors, img} from '../constants/index';
import {ButtonText, ButtonSmall} from '../components/index';
import AppIntroSlider from 'react-native-app-intro-slider';
import {color} from 'react-native-reanimated';

// create a component
const {width, height} = Dimensions.get('window');
const OnBoarding = ({navigation}) => {
  const slides = [
    {
      id: '1',
      title: 'Học tập',
      content: 'Bạn có thể tập trung học tập với những bài hát cùng DrMusic',
      img: img.peopleDark,
      carousel: img.carousel1,
    },
    {
      id: '2',
      title: 'Thư giãn',
      content: 'Thư giãn cùng với những bài hát của DrMusic',
      img: img.knowledgeDark,
      carousel: img.carousel2,
    },
    {
      id: '3',
      title: 'Hòa nhập',
      content: 'DrMusic cùng những bài hát sẽ giúp các bạn gần nhau hơn',
      img: img.comunityDark,
      carousel: img.carousel3,
    },
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-around',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: colors.Primary,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{marginBottom: 40, alignItems: 'center'}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <ButtonText
                title={'Bắt đầu thôi nào'}
                onPress={() => navigation.replace('SplashScreen')}
              />
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <ButtonSmall
                color={colors.Neural100}
                title={'Skip'}
                onPress={skip}
              />
              <View style={{width: 15}} />
              <ButtonSmall
                color={colors.Primary}
                title={'Next'}
                onPress={goToNextSlide}
              />
            </View>
          )}
        </View>
      </View>
    );
  };
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={img.Background}
        resizeMode="cover">
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <Image style={styles.img} source={item.img} />
                <View style={styles.boxContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.content}>{item.content}</Text>
                </View>
              </View>
            );
          }}
        />
        <Footer />
      </ImageBackground>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.Neural100,
  },
  container: {alignItems: 'center', height: height, width: width},
  img: {
    position: 'absolute',
    width: 260,
    height: 260,
    top: 222,
  },
  boxContent: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    width: 295,
    height: 78,
    paddingLeft: 8,
    top: 506,
    left: 40,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textColor,
    lineHeight: 24,
    marginBottom: 12,
  },
  content: {
    fontSize: 14,
    color: colors.textColor,
    textAlign: 'center',
    lineHeight: 21,
    fontWeight: '400',
  },

  indicator: {
    height: 12,
    width: 12,
    backgroundColor: colors.Neural80,
    marginHorizontal: 12,
    borderRadius: 6,
  },
});

//make this component available to the app
export default OnBoarding;
