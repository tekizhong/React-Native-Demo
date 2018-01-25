import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';//引入包

import ScarletScreen from './ScarletScreen'; //引入文件
import GrayScreen from './GrayScreen';//引入文件
import BlueScreen from './BlueScreen';
import MaizeScreen from './MaizeScreen';
import GoldScreen from './GoldScreen';
import BlackScreen from './BlackScreen';


    // Simple component to render something in place of icon
    const TabIcon = ({ selected, title }) => {
        return (
          <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
        );
      }

export default class RouterApp extends Component {


    testTabs(){
        return (
            <Router>
            <Scene key="root">
              {/* Tab Container */}
              <Scene
                key="tabbar"
                tabs={true}
                tabBarStyle={{ backgroundColor: '#FFFFFF' }}
              >
                {/* Tab and it's scenes */}
                <Scene key="osu" title="OSU" icon={TabIcon}>
                  <Scene key="scarlet"
                    component={ScarletScreen}
                    title="Scarlet"
                  />
                  <Scene
                    key="gray"
                    component={GrayScreen}
                    title="Gray"
                  />
                </Scene>
      
                {/* Tab and it's scenes */}
                <Scene key="um" title="UM" icon={TabIcon}>
                  <Scene
                    key="blue"
                    component={BlueScreen}
                    title="Blue"
                  />
                  <Scene
                    key="maize"
                    component={MaizeScreen}
                    title="Maize"
                  />
                </Scene>
      
                {/* Tab and it's scenes */}
                <Scene key="vu" title="VU" icon={TabIcon}>
                  <Scene
                    key="gold"
                    component={GoldScreen}
                    title="Gold"
                  />
                  <Scene
                    key="black"
                    component={BlackScreen}
                    title="Black"
                  />
                </Scene>
              </Scene>
            </Scene>
          </Router>
        )
    }

    testNavigation(){
        return (
            <Router>
                <Scene key="root">
                    <Scene key="scarlet"
                        component={ScarletScreen}
                        title="Scarlet"
                        initial
                    />
                    <Scene
                        key="gray"
                        component={GrayScreen}
                        title="Gray"
                    />
                </Scene>
            </Router>
        )
    }




    render() {
        return(
            this.testNavigation()

            // tab
            // this.testTabs()
        )
    }
}


