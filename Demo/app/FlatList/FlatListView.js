import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from 'react-native';


export default class FlatListView extends Component {

    render() {
      return (
          <View style ={{marginTop:50,height:100}}>
        <FlatList style = {{backgroundColor: 'red'}}
            data = {[{key:'a'},{key:'b'},{key:'c'},{key:'d'},{key:'e'},{key:'f'},{key:'g'},{key:'h'},{key:'i'},{key:'j'},{key:'k'},
            {key:'l'},{key:'m'},{key:'n'},{key:'o'}]}
            renderItem = {({item}) => <Text style = {{width: 70,height:30}}>{item.key}</Text>}
            >
        </FlatList>
    </View>
      );
    }
}
