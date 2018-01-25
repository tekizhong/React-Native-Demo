// https://github.com/APSL/react-native-keyboard-aware-scroll-view
// npm i react-native-keyboard-aware-scroll-view --save

import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class KeyboardAwareScrollViewExample extends Component {
    constructor() {
        super();
        this.state = { text: 'Useless Placeholder' };

    }

    render() {
        return (
            <KeyboardAwareScrollView >
                <View style = {{marginTop:660,backgroundColor:'red'}}>
                    <TextInput
                         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                         onChangeText={(text) => this.setState({text})}
                         value={this.state.text}
                       />
                </View>
            </KeyboardAwareScrollView>
        );
    }
}
