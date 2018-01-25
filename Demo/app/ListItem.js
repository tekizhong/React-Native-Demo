'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';


class Item extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '恒大集团信息化中心'
        };
    }

    render() {
        console.log('render');
        return (
            <View>
                <Text style={{color:'red'}}>{this.props.num}</Text>
                <Image style={{width:120, height:60,resizeMode:Image.resizeMode.contain}}
              source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2802100973,1738736961&fm=23&gp=0.jpg'}}>
                </Image>

                <Text>{this.state.name}</Text>
            </View>
        );
    }
}


export default class ListItem extends Component {
    render() {
        return (
            <View style= {{padding:30,flex:1}}>
                <Item num = '1'></Item>
                <Item num = '2'></Item>
                <Item num = '3'></Item>
                <Item num = '4'></Item>
                <Item num = '5'></Item>
            </View>
        );
    }
}


module.exports = ListItem;
