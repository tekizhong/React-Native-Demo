import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    NativeModules,
    TouchableOpacity,
    NativeEventEmitter, //需要导入这个组件
} from 'react-native';


var NativeBridge = NativeModules.EvergrandeEventEmitter;

const NativeEmitter = new  NativeEventEmitter(NativeModules.EvergrandeEventEmitter);

export default class NativeModulesDemo extends Component {

    componentDidMount(){
        NativeEmitter.addListener('EventReminder',(data)=>{
            console.log('data:',data);
        })
    }

    componentWillUnmount(){
        NativeEmitter&& NativeEmitter.removeListener();
    }


    render() {
        //  声明 RCTObjectTest
        var rctObject = NativeModules.ObjectTest;
           
        return (
            <View style = {{justifyContent:'center',top:60}}> 
                <TouchableOpacity onPress={() => {
                    //  调用原生方法 发送消息给原生app
                    rctObject.sendMessage('调用testNormalEvent方法');
                }}
                >
                    <Text style={styles.textStyle}
                    >React-Native 发送消息给原生APP </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    rctObject.testNormalEvent('调用testNormalEvent方法', '测试消息');

                }}
                >
                    <Text style={styles.textStyle}
                    >React-Native 发送两个参数的消息给原生APP </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    rctObject.testCallbackEvent(
                        { 'name': 'good', 'description': 'http://www.lcode.org' },
                        (error, events) => {
                            if (error) {
                                console.error(error);
                            } else {
                                console.log('events:',events);
                            }
                        })
                }}
                >
                    <Text style = {styles.textStyle}
                    >React-Native 与原生互调 </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    NativeBridge.testBridgeEvent();
                }}
                >
                    <Text style = {styles.textStyle}
                    >采用RCTEventEmitter与原生互调 </Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => {
                    rctObject.testPromiseEvent().then((result)=>{
                        console.log('result:',result);
                    }).catch((error)=>{
                        console.log('error:',error);
                    })
                }}
                >
                    <Text style = {styles.textStyle}
                    >采用Promise与原生互调(推荐) </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle:{
        height:40,
        justifyContent:'center',
        alignContent:'center',
    },

    textStyle:{
        justifyContent:'center',
        alignContent:'center',
        height:40,
    }
});