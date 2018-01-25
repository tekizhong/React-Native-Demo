import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import Carousel from 'react-native-snap-carousel';


const horizontalMargin = 20;
const slideWidth = 280;

const sliderWidth = Dimensions.get('window').width;
const itemWidth = slideWidth + horizontalMargin * 2;
const itemHeight = 200;



export default class CarouselDemo extends Component {
  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <View style={styles.slideInnerContainer}>
          <Text>{item}</Text>
        </View>

      </View>
    );
  }

  render() {
    return (
      <Carousel
        data = {["page 1","page 2","page 3"]}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        loop = {true}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    width: sliderWidth,
    height: itemHeight,
    paddingHorizontal: 0,
    backgroundColor:'red'
    // other styles for the item container
  },
  slideInnerContainer: {
    justifyContent:'center',
    alignItems:'center',
    width: sliderWidth,
    flex: 1,
  
    // other styles for the inner container
  }
});


