// 参考：http://www.jianshu.com/p/b7788c3d106e

import React, { Component } from 'react';

import { View, StyleSheet, Text, ScrollView } from 'react-native';

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';

import EvergrandeTabBar from './EvergrandeTabBar';

import WeixinTabBar from './WeixinTab';

export default class TabsExample extends Component {

    /**
     * 
     * 
     * @returns 
     * @memberof TabsExample
     */
    render() {
        let tabNames =  ['News', 'Friends', 'Messager', 'Notifications','Delegate', 'Blocks',
        // 'Override'
      ]; 
        const icons = [
        require('./load_up.png'),
        require('./load_down.png'),
        require('./load_up.png'),
        require('./load_down.png'),
        require('./load_up.png'),
        // require('./load_down.png'),
        // require('./load_up.png'),
        ];

        const sevenIcons = [
          require('./load_up.png'),
          require('./load_down.png'),
          require('./load_up.png'),
          require('./load_down.png'),
          require('./load_up.png'),
          require('./load_down.png'),
          require('./load_up.png'),
          // require('./load_down.png')
        ];
        return (
            <ScrollView style={{
                flex: 1,
                backgroundColor: 'red'
            }}>

            {
                // <ScrollableTabView
                //     style={{ marginTop: 20, backgroundColor: 'white' }}
                //     initialPage={1}
                //     prerenderingSiblingsNumber={Infinity}                    
                //     renderTabBar={() => <WeixinTabBar tabNames={tabNames} />}>
                //     <Text style={{ backgroundColor: 'red' }} tabLabel='Tab1' />
                //     <Text style={{ backgroundColor: 'yellow' }} tabLabel='Tab2' />
                //     <Text style={{ backgroundColor: 'blue' }} tabLabel='Tab3' />
                //     <Text style={{ backgroundColor: 'black' }} tabLabel='Tab4' />
                //     <Text style={{ backgroundColor: 'cyan' }} tabLabel='Tab5' />
                //     <Text style={{ backgroundColor: '#cccccc' }} tabLabel='Tab6' />
                // </ScrollableTabView>
            }

                {
                      // <ScrollableTabView
                      //     style={{ marginTop: 20 }}
                      //     initialPage={3}
                      //     renderTabBar={() => <ScrollableTabBar />}
                      //     prerenderingSiblingsNumber={Infinity}
                      //     >
                      //     <Text style={{ backgroundColor: '#cccccc' }} tabLabel='Tab #1'>My</Text>
                      //     <Text tabLabel='Tab #2 word word'>favorite</Text>
                      //     <Text tabLabel='Tab #3 word word word'>project</Text>
                      //     <Text tabLabel='Tab #4 word word word word'>favorite</Text>
                      //     <Text tabLabel='Tab #5'>project</Text>
                      // </ScrollableTabView>
                }


                {
                    <ScrollableTabView
                    style={{marginTop: 20, }}
                    initialPage={1}
                    renderTabBar={() => <EvergrandeTabBar icons = {icons} tabNames ={tabNames} showTabName = {false}/>}
                    prerenderingSiblingsNumber={Infinity}
                    >
                    <ScrollView tabLabel="ios-paper" style={styles.tabView}>
                      <View style={styles.card}>
                        <Text>News</Text>
                      </View>
                    </ScrollView>
                    <ScrollView tabLabel="ios-people" style={styles.tabView}>
                      <View style={styles.card}>
                        <Text>Friends</Text>
                      </View>
                    </ScrollView>
                    <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
                      <View style={styles.card}>
                        <Text>Messenger</Text>
                      </View>
                    </ScrollView>
                    <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
                      <View style={styles.card}>
                        <Text>Notifications</Text>
                      </View>
                    </ScrollView>
                    <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
                    <View style={styles.card}>
                      <Text>Delegate</Text>
                    </View>
                  </ScrollView>
                    </ScrollableTabView>
                }

                {
                  // <ScrollableTabView
                  // style={{marginTop: 20, }}
                  // initialPage={1}
                  // renderTabBar={() => <EvergrandeTabBar tabNames ={tabNames} />}
                  // prerenderingSiblingsNumber={Infinity}
                  // >
                  // <ScrollView tabLabel="ios-paper" style={styles.tabView}>
                  //   <View style={styles.card}>
                  //     <Text>News</Text>
                  //   </View>
                  // </ScrollView>
                  // <ScrollView tabLabel="ios-people" style={styles.tabView}>
                  //   <View style={styles.card}>
                  //     <Text>Friends</Text>
                  //   </View>
                  // </ScrollView>
                  // <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
                  //   <View style={styles.card}>
                  //     <Text>Messenger</Text>
                  //   </View>
                  // </ScrollView>
                  // <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
                  //   <View style={styles.card}>
                  //     <Text>Notifications</Text>
                  //   </View>
                  // </ScrollView>
                  // <ScrollView tabLabel="ios-list" style={styles.tabView}>
                  //   <View style={styles.card}>
                  //     <Text>Delegate</Text>
                  //   </View>
                  // </ScrollView>                      
                  // <ScrollView tabLabel="ios-list1" style={styles.tabView}>
                  // <View style={styles.card}>
                  //   <Text>Blocks</Text>
                  // </View>
                  // </ScrollView>
                //   <ScrollView tabLabel="ios-list2" style={styles.tabView}>
                //   <View style={styles.card}>
                //     <Text>Override</Text>
                //   </View>
                //   </ScrollView>
                //   </ScrollableTabView>
                }

                {
                //   <ScrollableTabView
                //   style={{marginTop: 20, }}
                //   initialPage={1}
                //   renderTabBar={() => <EvergrandeTabBar icons = {sevenIcons} tabNames ={tabNames} />}
                //   prerenderingSiblingsNumber={Infinity}
                //   >
                //   <ScrollView tabLabel="ios-paper" style={styles.tabView}>
                //     <View style={styles.card}>
                //       <Text>News</Text>
                //     </View>
                //   </ScrollView>
                //   <ScrollView tabLabel="ios-people" style={styles.tabView}>
                //     <View style={styles.card}>
                //       <Text>Friends</Text>
                //     </View>
                //   </ScrollView>
                //   <ScrollView tabLabel="ios-chatboxes" style={styles.tabView}>
                //     <View style={styles.card}>
                //       <Text>Messenger</Text>
                //     </View>
                //   </ScrollView>
                //   <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
                //     <View style={styles.card}>
                //       <Text>Notifications</Text>
                //     </View>
                //   </ScrollView>
                //   <ScrollView tabLabel="ios-list" style={styles.tabView}>
                //     <View style={styles.card}>
                //       <Text>Delegate</Text>
                //     </View>
                //   </ScrollView>                      
                //   <ScrollView tabLabel="ios-list1" style={styles.tabView}>
                //   <View style={styles.card}>
                //     <Text>Blocks</Text>
                //   </View>
                //   </ScrollView>
                //   <ScrollView tabLabel="ios-list2" style={styles.tabView}>
                //   <View style={styles.card}>
                //     <Text>Override</Text>
                //   </View>
                //   </ScrollView>
                //   </ScrollableTabView>
                }
            </ScrollView>




        );
    }
}


const styles = StyleSheet.create({
    tabView: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: { width: 2, height: 2, },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});