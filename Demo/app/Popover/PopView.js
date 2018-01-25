/*弹出层测试*/
import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Navigator,
  Alert, //引入Alert组件
  TouchableHighlight,
  AlertIOS  //引入AlertIOS组件
} from 'react-native';
//创建一个组件
class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="red"   //触摸的时候颜色改变  当前触发时间
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
//默认输出组件
export default class AlertDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{height:30,color:'black',margin:8}}>
          弹出框实例
        </Text>
        {/* 触发事件 */}
        <CustomButton text='点击弹出默认Alert'
          onPress={()=>Alert.alert('温馨提醒','确定退出吗?')}
          />
        <CustomButton text='点击弹出两个按钮的Alert'
          onPress={()=>Alert.alert('温馨提醒','确定退出吗?',[
            {text:'取消'},
            {text:'确定',}
            ])}
          />
        <CustomButton text='点击弹出三个按钮的Alert'
          onPress={()=>AlertIOS.alert('温馨提醒','确定退出吗?',[
            {text:'One'},
            {text:'Two'},
            {text:'Two'},
            {text:'Two'},
            {text:'Two'},
            {text:'Two'},
            {text:'Two'},
            {text:'Two'},
            {text:'Two'},
            {text:'Two'},
            {text:'Two'},
            {text:'Two'},
            ])}
          />
          <CustomButton text='点击出现输入框'
            onPress={()=>AlertIOS.prompt('温馨提醒','确定退出吗?',[
              {text:'取消'},
              {text:'确定',}
              ])}
            />

      </View>
    );
  }
}



var styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:1,
    marginTop:65,
},
button: {
  margin:5,
  backgroundColor: 'white',
  padding: 15,
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderBottomColor: '#cdcdcd',
}


})
