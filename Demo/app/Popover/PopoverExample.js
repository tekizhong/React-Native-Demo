//参考：  http://m.blog.csdn.net/true100/article/details/68945108
import React, {Component} from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    Image,
    ScrollView,
    FlatList,
} from "react-native";

import Popover from 'react-native-popover';


var spinnerTextArray = ['深圳南山', '深圳宝安', '深圳罗湖', '深圳福田','深圳南山', '深圳宝安', '深圳罗湖', '深圳福田']
//Popover开源地址：https://www.npmjs.com/package/react-native-popover
//  prop	              type	    optional	default	     description
// isVisible   	          bool	       Yes	     false	      Show/Hide the popover
// fromRect    	          rect	        No	       {}	       Rectangle at which to anchor the popover
// displayArea	          rect	        Yes	     screen rect    Area where the popover is allowed to be displayed
// placement        	string	        Yes	      'auto'	   How to position the popover - top | bottom | left | right | auto. When 'auto' is specified, it will determine the ideal placement so that the popover is fully visible within displayArea.
// onClose	            function	    Yes	                   	Callback to be fired when the user taps the popover
// customShowHandler	function      	Yes		              Custom show animation handler - uses a react-tween-state wrapper API in order to show the modal. See default show handler.
// customHideHandler	function	    Yes		              Custom hide animation handler - uses a react-tween-state wrapper API in order to hide the modal. See default hide handler.
//
export default class PopoverExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //下拉列表是否可见
            isVisible: false,
            //下拉列表大小范围
            spinnerRect: {},
        }
    }

    //显示下拉列表
    showSpinner() {
        this.refs.spinner.measure((ox, oy, width, height, px, py) => {
            this.setState({
                isVisible: true,
                spinnerRect: {x: px, y: py, width: width, height: height}
            });
        });
    }

    //隐藏下拉列表
    closeSpinner() {
        this.setState({
            isVisible: false
        });
    }

    //下拉列表每一行点击事件
    onItemClick(spinnerItem) {
        this.closeSpinner();
        console.log(spinnerItem);
        // this.toast.show(spinnerItem, DURATION.LENGTH_SHORT);
    }

    //TouchableOpacity用于封装视图，使其可以正确响应触摸操作
    //ref使用参考http://blog.csdn.net/jiangbo_phd/article/details/51758148
    render() {
        return <View style={{flex:1,alignItems:'flex-end',backgroundColor:'red'}}>
            <TouchableOpacity
                ref='spinner'
                style={{flexDirection:'row',alignItems:'center',marginTop:20,marginRight:20}}
                underlayColor='transparent'
                onPress={()=>this.showSpinner()}>
                <Text>
                    下拉菜单
                </Text>
                {/* <Image source={require('./busi_sel.png')}/> */}
            </TouchableOpacity>
            <Popover
                //设置可见性
                isVisible={this.state.isVisible}
                //设置下拉位置
                fromRect={this.state.spinnerRect}
                placement="bottom"
                //点击下拉框外范围关闭下拉框
                onClose={()=>this.closeSpinner()}
                //设置内容样式
                contentStyle={{opacity:0.82,backgroundColor:'#343434'}}
                style={{backgroundColor: 'red'}}>



                <ScrollView style={{height:100}}>
                    {spinnerTextArray.map((result, i, arr) => {
                        return <TouchableHighlight key={i} onPress={()=>this.onItemClick(arr[i])}
                                                   underlayColor='transparent'>
                            <View style = {{flexDirection:'row'}}>
                                <Image source = {require('./busi_sel.png')}></Image>
                                <Text
                                    style={{fontSize: 18,color:'white', padding: 8, fontWeight: '400'}}>
                                    {result}
                                </Text>
                            </View>

                        </TouchableHighlight>
                    })
                    }
                </ScrollView>
            </Popover>
            {/* <Toast ref={toast=>{
                       this.toast=toast
                    }}/> */}
        </View>
    }
}
