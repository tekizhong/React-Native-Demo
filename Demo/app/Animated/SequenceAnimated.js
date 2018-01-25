// 参考:http://www.alloyteam.com/2016/01/reactnative-animated/
// 还未调试通过
import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Animated,
  Text,
  Easing,
} from 'react-native';
var SequenceAnimatedExample = React.createClass({
    getInitialState() {
        return (anim : [1, 2, 3].map(() => new Animated.Value(0)) // 初始化3个值
        );
    },


    componentDidMount(){
        var timing = Animated.timing;
        Animated.sequence([
            Animated.stagger(200,this.state.anim.map(left => {
                return timing(left,{
                    toValue: 1,
                });
            }).concat(this.state.anim.map(lef => {
                return timing(left,{
                    toValue:0
                });
            })
        )),

        Animated.delay(400),
        timing(this.state.anim[0],{
            toValue:1
        }),
        timing(this.state.anim[1],{
            toValue:-1
        }),
        timing(this.state.anim[2],{
            toValue:0.5
        }),
        Animated.delay(400),
        Animated.parallel(this.state.anim.map((anim)=>timing(anim,{
            toValue:0
        }))) //同时回到原位置
        ]).start();
    },

    render() {
        var views = this.state.anim.map(function(value ,i )){
            return(
                <Animated.View
                    key = {i}
                    style = {[styles.demo,styles['demo' + i],{
                        left:value.interpolate({
                            inputRange:[0,1],
                            outputRange:[0,200]
                        })
                    }]}>
                        <Text style = {styles.text}>我是第{i+1}个view</Text>
                    </Animated.View>
            );
        };
      return (
          <View>
              <Text>sequence/delay/stagger/parallel演示</Text>
          </View>
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
