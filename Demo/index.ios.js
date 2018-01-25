/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,

    
    Modal,
    TouchableHighlight,
    TextInput,
    Dimensions,
    ScrollView,
    Platform,
    NativeAppEventEmitter,
    BackAndroid,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import ArticleDemo from './app/ArticleDemo'

import ListItem from './app/ListItem'

import HomeScreen from './app/navigation/ReactNavigationDemo'

import ChatScreen from './app/navigation/ChatScreen'

import Sina from './app/Sina'

import ButtonDemo from './app/ButtonAndTouchable'

import FirstView from './app/ListView/FirstView'

import SecondView from './app/ListView/CollectionView'

import ThirdView from './app/ListView/GroupListView'

import FlatListView from './app/FlatList/FlatListView'

import FlatListExample from './app/FlatList/FlatListExample'

import ModalExample from './app/Modal/ModalExample'

import SimpleAnimatedExample from './app/Animated/SimpleAnimated'
//
// import MutiplyAnimatedExample from './app/Animated/MutiplyAnimated'
//
// import SequenceAnimatedExample from './app/Animated/SequenceAnimated'
//
//
import CollapsibleText from './app/ExpandText/CollapsibleText'

import KeyboardAwareScrollViewExample from './app/keyboard/keyboardawarescrollview'

import PopoverExample from './app/Popover/PopoverExample'

import PopoverList from './app/Popover/PopoverList'

import MenuModal from './app/Popover/PopupWindowExample';

// import TreeView from './app/TreeView/TreeView';

import AlertDemo from './app/Popover/PopView';


import TabsExample from './app/Tabs/TabsDemo';

import DropMenuView from './app/DropList/DropMenuView';

import ImagePickerEdit from './app/ImagePickerAndEdit/ImagePicker';


import OnLayoutDemo from './app/View/OnLayout'

import ScrollViewDemo from './app/View/ScrollViewOnLayout';

import ImageDemo from './app/ImageDemo';

import NativeModulesDemo from './app/NativeModules/NativeModulesDemo'

import CarouselDemo from './app/Carousel/CarouselDemo'

import SwiperDemo from './app/Carousel/Swiper/Swiper'

import RouterApp from './app/Router/index'

import DeviceInfoDemo from './app/DeviceInfo/DeviceInfoDemo'

import OrientationDemo from './app/Orientation/OrientationDemo'

import ShoutemUIDemo from './app/ShoutemUI/ShoutemUIDemo'

import ProgressDemo from './app/Progress/ProgressDemo'

import EvergrandeViewDemo from './app/EvergrandeViewDemo/EvergrandeViewDemo';

import ImageZoomViewerDemo from './app/ImageZoomViewer/ImageZoomViewer';


import JPushModule from 'jpush-react-native';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false,
            buttonRect: {},
            text: "终于完成"
        }
        if(Platform.OS === 'android') JPushModule.initPush();

    }

    selectedItemWithIndex(item, index) {
        console.log(item);
        console.log(index);
        this.setState({
            isVisible: false,
            buttonRect: {},
            text: item.title
        })
    }


    showPopover() {
        let button = this.refs.button;
        button.measure((ox, oy, width, height, px, py) => {
            this.setState({
                isVisible: true,
                buttonRect: { x: px, y: py, width: width, height: height }
            })
        })
    }

    // 测试弹出框
    testPopover = () => {

        var lists = [{
            icon: "haha",
            title: '深圳南山'
        },
        {
            icon: "haha",
            title: '深圳宝安',

        },
        {
            icon: "haha",
            title: '深圳罗湖',
        },
        {
            icon: "haha",
            title: '深圳futian',
        }
        ];

        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <TouchableHighlight
                    ref="button"
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20, width: 100, backgroundColor: '#cccccc' }}
                    onPress={this.showPopover.bind(this)}>
                    <Text style={{ fontSize: 20 }}>Press me</Text>
                </TouchableHighlight>
                <Text>{this.state.text}</Text>
                <PopoverList
                    lists={lists}
                    placement="bottom"
                    ref='popover'
                    isVisible={this.state.isVisible}
                    callbackSeletedItem={(item, index) => this.selectedItemWithIndex(item, index)}
                    buttonRect={this.state.buttonRect}
                />
            </View>
        );
    }

    // 测试展开
    testCollapsibleText() {
        return (
            <CollapsibleText
                style={{ padding: 5, backgroundColor: 'red', fontSize: 20, color: 'white' }}
                expandTextStyle={{ fontSize: 16 }}>
                helloworldhell<Text style={{ color: '#cccccc' }}>hahani xiangduole </Text>oworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworldhelloworld
            </CollapsibleText>
        );
    }

    testDropMenuView() {
        let items = [
            {
            title: '交易方向',
            tag: 0, //用来标记你选择了哪个View
            list: [{
                icon: require('./app/DropList/load_down.png'),
                title: '选择一'
            },
            {
                icon: require('./app/DropList/load_down.png'),
                title: '选择二'
            },
            {
                icon: require('./app/DropList/load_down.png'),
                title: '选择三'
            },
            {
                icon: require('./app/DropList/load_down.png'),
                title: '选择四'
            },
            {
                icon: require('./app/DropList/load_down.png'),
                title: '选择五'
            },
            {
                icon: require('./app/DropList/load_down.png'),
                title: '选择六'
            },
            {
                icon: require('./app/DropList/load_down.png'),
                title: '选择七'
            },
            {
                icon: require('./app/DropList/load_down.png'),
                title: '选择八'
            },
            {
                icon: require('./app/DropList/load_down.png'),
                title: '选择九'
            },
        ]  
        },
        {
            title: '交易金额',
            tag: 1,
            list: [{
                title: '选择一'
            },
            {
                title: '选择二'
            },
            {
                title: '选择三'
            },
            {
                title: '选择四'
            },
            {
                title: '选择五'
            },
            {
                title: '选择六'
            },
            {
                title: '选择七'
            }],
        },
        {
            title: '交易方式',
            tag: 2,
            list: [{
                title: '选择一'
            },
            {
                title: '选择二'
            },
            {
                title: '选择三'
            },
            {
                title: '选择四'
            },
            {
                title: '选择五'
            },
            {
                title: '选择六'
            },
            {
                title: '选择七'
            }],
        }
        ];

        let width = Dimensions.get('window').width / items.length;
        
        return (
            <View style={{ flex: 1, backgroundColor: 'red'}}>
                <View style = {{marginTop:40,flexDirection:'row'}}>
                    {
                        items.map((item,i)=>{
                          return   (<DropMenuView
                            key = {i}
                            item = {item}
                            // showDefaultIcon = {require('./app/DropList/load_up.png')}
                            // showDropIcon = {require('./app/DropList/load_down.png')}
                            style = {{width:width}}
                            buttonStyle = {{backgroundColor: 'white'}}
                            buttonTextStyle = {{fontSize: 16}}
                            rowTextStyle = {{fontSize:16,color:'black'}}
                            rowTextSelectedStyle = {{color:'blue'}}
                            rowViewStyle = {{backgroundColor:'gray'}}
                            rowViewSelectedStyle = {{backgroundColor:'gray'}}
                            rowHeight = {40}
                            dropdownStyle={{ height: 280 ,backgroundColor:'white'}}
                            selectedCallBack = {(item,idx,tag) => {
                                console.log(item.title,idx,tag);
                            }} /> )
                        })
                    }

                </View>
                <View>
                <DropMenuView
                style = {{width:100,marginTop:40,marginLeft:40}}
                buttonStyle = {{backgroundColor: 'yellow'}}
                buttonTextStyle = {{fontSize: 16}}
                rowTextStyle = {{fontSize:16,color:'cyan'}}
                rowTextSelectedStyle = {{color:'red'}}
                rowViewStyle = {{backgroundColor:'gray'}}
                rowViewSelectedStyle = {{backgroundColor:'blue'}}
                rowHeight = {40}
                dropdownStyle={{ height: 100 ,backgroundColor:'white'}}
                selectedCallBack = {(item,idx,tag) => {
                    console.log(item.title,idx,tag);
                }} 
            />

           

                <DropMenuView
                item = {items[0]}
                // 如果朝上的话需要设置这个按钮的初始图片  这个看是否有什么好的解决办法(待后期优化)
                showDefaultIcon = {require('./app/DropList/load_up.png')}
                showDropIcon = {require('./app/DropList/load_down.png')}
                style = {{width:100,marginTop:300,marginLeft:40}}
                buttonStyle = {{backgroundColor: 'yellow'}}
                buttonTextStyle = {{fontSize: 16}}
                rowTextStyle = {{fontSize:16,color:'black'}}
                rowTextSelectedStyle = {{color:'blue'}}
                rowViewStyle = {{backgroundColor:'gray'}}
                rowViewSelectedStyle = {{backgroundColor:'gray'}}
                rowHeight = {40}
                dropdownStyle={{ height: 280 ,backgroundColor:'white'}}
                selectedCallBack = {(item,idx,tag) => {
                    console.log(item.title,idx,tag);
                }} 
            />
            </View>
            
              </View>
        );
    }

    // 测试Tabbar
    testTabBar(){
        return <TabsExample/>
    }


    testImagePicker(){
        return <ImagePickerEdit/>
    }

    testNavigation(){
        const SimpleApp = StackNavigator({
            Home: { screen: HomeScreen },
            Chat: { screen: ChatScreen },
        },
            {
                navigationOptions: {
                    // headerStyle: { backgroundColor: color.theme }
                    headerBackTitle: null,
                    headerTintColor: '#333333',
                    headerStyle:{backgroundColor:'red'},
                    showIcon: true,
                },
            }
    );
        return <SimpleApp/>
    }


    testOnLayout(){
        return <OnLayoutDemo/>
    }

    testScrollViewDemo(){
        return <ScrollViewDemo/>
    }

    testBackgroundImage(){
        return <ImageDemo/>
    }


    testNativeModules(){
        return <NativeModulesDemo/>
    }


    testModalExample(){
        return <ModalExample/>
    }

    testCarouselDemo(){
        return <CarouselDemo/>
    }


    testSwiperDemo(){
        return <SwiperDemo/>
    }


    testRouterApp(){
        return <RouterApp/>
    }

    testDeviceInfoDemo(){
        return <DeviceInfoDemo/>
    }

    testOrientation(){
        return <OrientationDemo/>
    }


    testShoutemUIDemo(){
        return <ShoutemUIDemo/>
    }


    testProgressDemo(){
        return <ProgressDemo/>
    }

    testEvergrandeView(){
        return <EvergrandeViewDemo/>
    }

    testImageZoomViewer(){
        return <ImageZoomViewerDemo/>
    }



    componentDidMount(){
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this._onBackAndroid);

            //-----------jpush  android start
            // JPushModule.getInfo((map) => {
            //     console.log(map);
            // });
            // JPushModule.addReceiveCustomMsgListener((message) => {
            // });
            JPushModule.addReceiveNotificationListener((message) => {
                console.log("receive notification: ");
                console.log(message);
            });
            JPushModule.addReceiveOpenNotificationListener((map) => {

                console.log("Opening notification!");
                console.log(map);
            });
            //-----------jpush  android end
        }


        //-----------jpush  ios start
        if (Platform.OS === 'ios') {
            this.subscription = NativeAppEventEmitter.addListener(
                'ReceiveNotification',
                (notification) => {
                    console.log('-------------------收到推送----------------');
                    console.log(notification)
                }
            );
        }
        //-----------jpush  ios end
    }

    componentWillUnmount(){
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this._onBackAndroid);
        }
        JPushModule.removeReceiveCustomMsgListener();
        JPushModule.removeReceiveNotificationListener();
        this.subscription && this.subscription.remove();
    }
   

    render() {
        return (
            // popover
            // this.testPopover()
            
            // 文本展开收缩
            // this.testCollapsibleText()

            // 下拉选择视图
            // this.testDropMenuView()
            
            // TabBar 
            // this.testTabBar()

            // 图片选择
            // this.testImagePicker()

            // 导航
            // this.testNavigation()
            // this.testRouterApp()

            // onlayout 函数 
            // this.testOnLayout()

            // 
            // this.testScrollViewDemo()

            // 背景图
            // this.testBackgroundImage()

            // 原生与React-Native交互
            // this.testNativeModules()

            // Modal 模态视图
            // this.testModalExample()


            // 轮播图片
            // this.testSwiperDemo()
            // this.testCarouselDemo()

            // 设备信息
            // this.testDeviceInfoDemo()

            // 设备方向
            // this.testOrientation()

            // ShoutemUI
            // this.testShoutemUIDemo()

            // 圆形进度条
            // this.testProgressDemo()

            // 自定义View
            // this.testEvergrandeView()

            // 图片放大缩小
            this.testImageZoomViewer()
        );
    }
}


AppRegistry.registerComponent('Demo', () => App);

// AppRegistry.registerComponent('Demo', () => ArticleDemo);

// AppRegistry.registerComponent('Demo', () => ListItem);

// AppRegistry.registerComponent('Demo', () => Sina);

// AppRegistry.registerComponent('Demo', () => ButtonDemo);

// AppRegistry.registerComponent('Demo', () => FirstView);

// AppRegistry.registerComponent('Demo', () => SecondView);

// AppRegistry.registerComponent('Demo', () => FlatListExample);

// AppRegistry.registerComponent('Demo', () => FlatListView);

// AppRegistry.registerComponent('Demo', () => ModalExample);

// 动画
// AppRegistry.registerComponent('Demo', () => SimpleAnimatedExample);
// 一个RN的动画，可以按照以下步骤进行。
// 使用基本的Animated组件，如Animated.View Animated.Image Animated.Text （重要！不加Animated的后果就是一个看不懂的报错，然后查半天动画参数，最后怀疑人生）
// 使用Animated.Value设定一个或多个初始化值（透明度，位置等等）。
// 将初始化值绑定到动画目标的属性上（如style）
// 通过Animated.timing等函数设定动画参数
// 调用start启动动画。


// AppRegistry.registerComponent('Demo', () => MutiplyAnimatedExample);

// AppRegistry.registerComponent('Demo', () => SequenceAnimatedExample);

// AppRegistry.registerComponent('Demo', () => PopoverExample);

// AppRegistry.registerComponent('Demo', () => PopoverList);

// AppRegistry.registerComponent('Demo', () => MenuModal);

// AppRegistry.registerComponent('Demo', () => KeyboardAwareScrollViewExample);

// AppRegistry.registerComponent('Demo', () => TreeViewExample);


