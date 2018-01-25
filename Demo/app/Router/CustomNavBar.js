import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Actions } from 'react-native-router-flux'
import {isIphoneX,ifIhoneX} from './iPhoneX'

const styles = StyleSheet.create({
  container: {
    height: (Platform.OS === 'ios') ? (isIphoneX()? 88:64) : 44,
    flexDirection: 'row',
    paddingTop: (Platform.OS === 'ios') ? (isIphoneX()? 44:20) : 0,
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center'
  },
  navBarItemTitle: {
    flex: 2,
    justifyContent: 'center',
    alignItems:'center'
  }
})

export default class CustomNavBar extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  _renderLeft() {
    if (Actions.currentScene === 'customNavBar1') {
      return (
        <TouchableOpacity
          onPress={() => console.log('Hamburger button pressed')}
          style={[styles.navBarItem, { paddingLeft: 10}]}>
          <Image
            style={{width: 30, height: 50}}
            resizeMode="contain"
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'}}></Image>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={Actions.pop}
          style={[styles.navBarItem, { paddingLeft: 10}]}>
          <Image
            style={{width: 30, height: 50}}
            resizeMode="contain"
            source={{uri: 'https://image.flaticon.com/icons/png/512/0/340.png'}}></Image>
        </TouchableOpacity>
      )
    }
  }

  _renderMiddle() {
    return (
      <View style={styles.navBarItemTitle}>
        <Text>{ this.props.title }</Text>
      </View>
    )
  }

  _renderRight() {
    return (
      <View style={[styles.navBarItem, { flexDirection: 'row', justifyContent: 'flex-end' }]}>
        <TouchableOpacity
          onPress={() => console.log('Share')}
          style={{ paddingRight: 10}}>
          <Image
            style={{width: 30, height: 50}}
            resizeMode="contain"
            source={{uri: 'https://cdn3.iconfinder.com/data/icons/glypho-free/64/share-512.png'}}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('Search')}
          style={{ paddingRight: 10 }}>
          <Image
            style={{width: 30, height: 50}}
            resizeMode="contain"
            source={{uri: 'https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//search1600.png'}}></Image>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    let dinamicStyle = {}
    if (Actions.currentScene === 'customNavBar1') {
      dinamicStyle = { backgroundColor: 'red'}
    } else {
      dinamicStyle = { backgroundColor: 'yellow'}
    }

    return (
        <View style={[styles.container, dinamicStyle]}>
          { this._renderLeft() }
          { this._renderMiddle() }
          { this._renderRight() }
        </View>
    )
  }
}
