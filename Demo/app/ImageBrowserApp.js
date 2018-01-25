'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
} from 'react-native';


class ImageBrowserApp extends Component {
  renderImage(imgURI) {
    return (
      <Image source={{uri: imgURI}} />
    );
  }


  render() {
   
    return (
      <View>
        {/* <Text> helloworld </Text> */}
        {/* <Text style ={{marginTop:30}}>{this.props.images}</Text> */}
        this.props.images.map(this.renderImage);
      </View>
    );
  }
}

module.exports = ImageBrowserApp;
