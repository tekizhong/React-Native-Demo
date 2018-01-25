import React, { Component } from 'react';

import { 
    Text,
    View,
    StyleSheet
 } from "react-native";

import Swiper from 'react-native-swiper';

 export default class SwiperDemo extends Component{

    // 静态设置
    testBasic(){
      return (<Swiper style={styles.wrapper} 
        showsButtons = {false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>);
    }



    render(){
        return(
            // 动态样式
            this.testDynamic()
        );
    }
 

 }

 var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  });


 
