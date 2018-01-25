// Install
// npm i --save react-native-popover  目前使用的是0.3.0
// 参考：http://blog.csdn.net/true100/article/details/68945108?ref=myread

import React, {Component,PropTypes} from 'react';

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    FlatList,
    ScrollView,
    Image,
    PixelRatio
} from 'react-native';

import Popover from 'react-native-popover';

export default class PopoverList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //下拉列表是否可见
            isVisible: this.props.isVisible,
            //下拉列表大小范围
            buttonRect: this.props.buttonRect
        }
    }


    //下拉列表每一行点击事件
    onItemClick(spinnerItem, index) {
        this.closeModal();
        console.log(spinnerItem);
        if (this.props.callbackSeletedItem != null) {
            this.props.callbackSeletedItem(spinnerItem, index);
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({buttonRect:nextProps.buttonRect,isVisible: nextProps.isVisible});
    }

    // 关闭modal界面
    closeModal() {
        this.setState({isVisible: false});
    }

    render() {
        var lists = this.props.lists;
        var height = lists.length * 40;
        if (lists.length>4) {
            height = 4*40;
    }



        return (
                <Popover contentStyle={this.props.contentStyle} isVisible={this.state.isVisible} fromRect={this.state.buttonRect} onClose={() => this.closeModal()} placement=  {this.props.placement}>
                    <ScrollView style={{
                        height:height
                    }}>

                        {
                            this.props.lists.map((result, i) => {
                            // 判断是否有图片
                            var  hasImage = (result.icon != null);
                            return (
                                <TouchableHighlight key={i} onPress={() => this.onItemClick(result, i)} underlayColor='transparent'
                                    style = {{justifyContent:'center'}}>
                                    <View style={{
                                        flexDirection: 'row',
                                        height: 40,
                                        justifyContent: 'center',
                                        flex: 1,
                                        borderBottomColor:this.props.separateLineColor,
                                        borderBottomWidth:1/PixelRatio.get()
                                    }}>
                                    {
                                        hasImage?
                                        (<Image source={result.icon}></Image>):null
                                    }
                                        <Text style={this.props.textStyle}>
                                            {result.title}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        })}
                    </ScrollView>
                </Popover>
        );
    }


    static propTypes = {
        placement: PropTypes.string, //箭头显示的位置
    }

    static defaultProps = {
        lists:null, // 显示的数组[{icon:require('./...png'),title:}]
        buttonRect:{},
        placement:'bottom',        //箭头显示的位置
        separateLineColor:'gray', //分割线颜色
        contentStyle:{backgroundColor:'#2f4f4f'}, //内容样式
        textStyle:{     //字体样式
            fontSize: 18,
            color: 'black',
            padding: 5,
            fontWeight: '400'
        },

    }

};

var styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(43, 186, 180)'
},
button: {
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#ccc',
    borderColor: '#333',
    borderWidth: 1
},
buttonText: {}
});
