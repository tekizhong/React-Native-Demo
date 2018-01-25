// http://blog.csdn.net/xiangzhihong8/article/details/71249167
import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends Component {

    static navigationOptions = {
        // title: 'Welcome', // 标题
        headerTitle:'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Text>Hello,Navigation</Text>
                <Button onPress = {()=> navigate('Chat')} title = "Chat with Lucy"/>
            </View>
        );
    }
}
