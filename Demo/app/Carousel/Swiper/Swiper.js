import React, { Component } from 'react'  

import { 
    Text,
    View,
    StyleSheet
 } from "react-native"  

 import Basic from './Components/Basic/Index'

 import Dynamic from './Components/Dynamic/Index'

 import LoadMinimal from './Components/LoadMinimal/Index'

 import Phone from './Components/Phone/Index'

//  import PhotoView from './Components/PhotoView/Index'

import Swiper from './Components/Swiper/Index'

import SwiperNumber from './Components/SwiperNumber/Index'


 export default class SwiperDemo extends Component{

    // 静态设置
    testBasic(){
      return (<Basic/>)  
    }

    // 动态展示
    testDynamic(){
       return (<Dynamic/>)
    }

    // 加载网络图片
    testLoadMinimal(){
      return (<LoadMinimal/>)
    }

    // 加载iPhone图片
    testPhone(){
      return (<Phone/>)
    }

    // testPhotoView(){
    //   return (<PhotoView/>)
    // }

    testSwiper(){
      return (<Swiper/>)
    }

    
    testSwiperNumber(){
      return (<SwiperNumber/>)
    }

    render(){
        return(
            // 基础样式
            // this.testBasic()

            // 动态样式
            // this.testDynamic()

            // LoadMinimal
            // this.testLoadMinimal()

            // phone
            // this.testPhone()

            // photoView
            // this.testPhotoView()

            // Swiper
            // this.testSwiper()

            // SwiperNumber
            this.testSwiperNumber()


        )  
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
  })  


 
