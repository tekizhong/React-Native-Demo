import React, {Component} from 'react';
import {View, StyleSheet, Button, Text,TouchableOpacity,TouchableHighlight,Alert} from 'react-native';

export default class ButtonDemo extends Component {
    click() {
        Alert.alert(
                               '你点击了按钮',
                               'Hello World！',
                               [
                                //    {text: '以后再说', onPress: () => console.log('Ask me later pressed')},
                                   {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                   {text: '确定', onPress: () => console.log('OK Pressed')},
                               ]
                           )
    }

    render() {
        return (
            <View>

                    <TouchableHighlight style={{
                        backgroundColor: 'cyan',
                    }}
                    onPress = {this.click}
                    underlayColor = 'blue'
                    onShowUnderly = {()=>{console.log("onShowUnderly");}}
                    onHiddenUnderly = {()=>{console.log("onShowUnderly");}}
                    activeOpacity = {0.1}
                    >
                        <View>
                            <Text>helloworld</Text>
                            <Text>hahahaha</Text>
                            <Text>hahahaha</Text>
                        </View>

                    </TouchableHighlight>



                    <TouchableOpacity style={{
                        backgroundColor: 'red'
                    }}
                    onPress = {this.click}
                    >
                        <View>
                            <Text>helloworld</Text>
                            <Text>hahahaha</Text>
                        </View>
                    </TouchableOpacity>

                <View style={{
                    marginTop: 50
                }}>
                    <Button style = {{width: 200, height: 30}} color = 'red'

                         title="点击我"
                         onPress={this.click}/>
                </View>
            </View>
        );
    }
}
