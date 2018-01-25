import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet
} from "react-native";

import Swiper from 'react-native-swiper';


export default class SwiperDemo extends Component {






    constructor() {
        super();
        this.state = {
            items: []
        }
    }


    componentDidMount() {
        this.setState({
            items:
                [
                    { title: 'Hello Swiper', css: styles.slide1 },
                    { title: 'Beautiful', css: styles.slide2 },
                    { title: 'And simple', css: styles.slide3 }
                ]
        })
    }

    // 动态展示
    testDynamic() {
        return (<Swiper showsButtons={false}>
            {this.state.items.map((item, key) => {
                return (
                    <View key={key} style={item.css}>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                )
            })}
        </Swiper>);
    }

    render() {
        return (
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



