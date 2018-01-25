// 参考:http://www.alloyteam.com/2016/01/reactnative-animated/

import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Animated,
  Text,
  Easing,
} from 'react-native';

var SimpleAnimatedExample = React.createClass({
    getInitialState(){
        return {
            fadeInOpacity: new Animated.Value(0)
        };
    },

    componentDidMount(){
        Animated.timing(this.state.fadeInOpacity,{
            toValue:1,
            duration: 2500,
            easing: Easing.liner
        }).start();
    },


    render() {
      return (
        <Animated.View style  = {[styles.demo,{
            opacity: this.state.fadeInOpacity
        }]}>
            <Text style = {styles.text}>悄悄的，我出现了</Text>
        </Animated.View>
      );
    }
});


var styles = StyleSheet.create({
    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 30
    }
});


module.exports = SimpleAnimatedExample;
