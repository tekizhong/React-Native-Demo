'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class ImageDemo extends Component {
    render(){
        return(
            <Image
                style = {{width:screenWidth,height:screenHeight,justifyContent:'center',alignItems:'center'}}
                source={require('./Images/LaunchImage-568h.png')}>
                <Text>helloworld</Text>
            </Image>
        );
    }
}
