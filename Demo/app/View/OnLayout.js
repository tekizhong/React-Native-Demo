import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Dimensions,
 View,
 Text,
 ScrollView
} from 'react-native';
 
export default class OnLayoutDemo extends Component {
   //根View的onLayout回调函数
   _onLayout(event) {
     //使用大括号是为了限制let结构赋值得到的变量的作用域，因为接来下还要结构解构赋值一次
     {
       //获取根View的宽高，以及左上角的坐标值
       let {x, y, width, height} = event.nativeEvent.layout;
       console.log('通过onLayout得到的宽度：' + width);
       console.log('通过onLayout得到的高度：' + height);
     }
 
     //通过Dimensions API获取屏幕宽高
     let {width, height} = Dimensions.get('window');
     console.log('通过Dimensions得到的宽度：' + width);
     console.log('通过Dimensions得到的高度：' + height);
   }
   render() {
     return (
       <View style={styles.flex} onLayout={this._onLayout}>
            <View style = {styles.second} onLayout={this._onLayout}></View>
            <View style = {styles.second}></View>
            <View style = {styles.second}></View>
            <View style = {styles.second}></View>
            <View style = {styles.second}></View>
       </View>
     );
   }
}
 
const styles = StyleSheet.create({
  flex:{
     flex:1,  //将更View的flex样式设为1，且不指定根View的宽和高。
     alignItems: 'center'
  },

  second:{
      flex:1,
      padding:20,
      backgroundColor:'red'
  }
});