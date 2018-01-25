import React,{Component} from 'react';

import {
    View,
    Text
} from 'react-native';

import Orientation from 'react-native-orientation';



export default class OrientationDemo extends Component {
    // ...
    constructor(props){
      super(props)
      const init = Orientation.getInitialOrientation();
      this.state = {
        orientation: init,
    };
    }
  
    componentWillMount() {
      // The getOrientation method is async. It happens sometimes that
      // you need the orientation at the moment the JS runtime starts running on device.
      // `getInitialOrientation` returns directly because its a constant set at the
      // beginning of the JS runtime.
  
      const initial = Orientation.getInitialOrientation();
    
      if (initial === 'PORTRAIT') {
        // do something
        console.log('PORTRAIT');
        
      } else {
        // do something else
        console.log('非PORTRAIT');
      }
    }
  
    componentDidMount() {
      // this locks the view to Portrait Mode
    //   Orientation.lockToPortrait();
  
      // this locks the view to Landscape Mode
      // Orientation.lockToLandscape();
  
      // this unlocks any previous locks to all Orientations
      // Orientation.unlockAllOrientations();
  
      Orientation.addOrientationListener(this._orientationDidChange);
    }
  
    _orientationDidChange = (orientation) => this.setState({ orientation })
  
    componentWillUnmount() {
      Orientation.getOrientation((err, orientation) => {
        console.log(`Current Device Orientation: ${orientation}`);
      })
  
  
      // Remember to remove listener
      Orientation.removeOrientationListener(this._orientationDidChange);
    }
  
    render() {
      // ...
      return (
        // ...
        <View style = {{justifyContent:'center',alignItems:'center'}}>
          <Text> 当前方向：{this.state.orientation}
          </Text>
        </View>
      )
    }
  }