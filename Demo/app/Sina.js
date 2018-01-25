import React, { Component } from 'react';
import Dimensions from 'Dimensions';

import {
  View,
  StyleSheet,
  WebView,
  Text,
} from 'react-native';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Sina extends Component {
    render() {
      return (
        <View>
            <WebView injectedJavaScript= "alert('欢迎使用React Native')"
                bounces = {false}
                source = {{uri:'http://weibo.com/vczero?is_hot=1'}}
                style = {{width:width,height:height}}>

            </WebView>
        </View>
      );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
