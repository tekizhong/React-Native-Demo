import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Animated,
} from 'react-native';

export default class DialogExample extends Component {
    render() {
      return (
          <View>
              <Animated.View style = {styles.mask}>

              </Animated.View>
          </View>

      );
    }
}
