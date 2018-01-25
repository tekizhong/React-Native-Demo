// 下拉菜单 参考http://blog.csdn.net/sinat_17775997/article/details/64437697
//
//
import React, { Component, PropTypes } from 'react';

import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableWithNativeFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    Image,
    PixelRatio,
} from 'react-native';

// borderwidth
let lineWidth = 1 / PixelRatio.get();
// borderColor
let borderColor = '#cccccc';
// 行高
let rowHeight = 30;

export default class DropMenuView extends Component {

    static propTypes = {
        // 选中的回调 selectedCallBack(idx,item.tag)
        selectedCallBack: React.PropTypes.func,

    }

    static defaultProps = {
        item:
        {
            title: '交易方向',
            tag: 0,
            list: [{
                icon: require('./load_down.png'),
                title: '选择一'
            },
            {
                icon: require('./load_down.png'),
                title: '选择二'
            },
            {
                icon: require('./load_down.png'),
                title: '选择三'
            },
            {
                icon: require('./load_down.png'),
                title: '选择四'
            },
            {
                icon: require('./load_down.png'),
                title: '选择五'
            },
            {
                icon: require('./load_down.png'),
                              title: '选择六'
            },
            {
                icon: require('./load_down.png'),
                title: '选择七'
            }],
        },

        // 按钮右边的默认图片
        showDefaultIcon: require('./load_down.png'),

        // 列表显示框弹出显示图片
        showDropIcon: require('./load_up.png'),

        // 行高 默认30
        rowHeight: rowHeight,

        // 下拉框样式，用到width height 如果不设置  width使用的是button的宽度 height 默认100
        dropdownStyle: {},

        // 按钮样式
        buttonStyle: {},

        // button 的text样式 默认参考styles.buttonText
        buttonTextStyle: {},

        // row 样式
        rowViewStyle: {},

        //  row 选中样式
        rowViewSelectedStyle: {},

        // text 样式
        rowTextStyle: {},

        // text 选中样式
        rowTextSelectedStyle: {},

    };


    ///重置的方法
    reset = () => {
        this.setState({
            selectedIndex: 0,
        });
    };



    constructor(props) {
        super(props);
        this.state = {
            showDropMenu: false,///是否展开下拉列表
            selectedIndex: this._judgemenntTitleIndex(),
            btnTitle: props.item.title,
        };

        this._button = null;
        this._buttonFrame = null;
    }

    // 判断选中了哪个 默认选中第一个
    _judgemenntTitleIndex = () => {
        const { item } = this.props;
        var index = 0;
        item.list.map((sub, i) => {
            if (item.title == sub) {
                index = i;
            }
        });
        return index;
    };

    // 计算button在屏幕的位置
    _updatePosition = (callback) => {
        if (this._button && this._button.measure) {
            this._button.measure((fx, fy, width, height, px, py) => {
                this._buttonFrame = { x: px, y: py, width: width, height: height };
                callback && callback();
            });
        }
    };


    _onModalPress = () => {
        this.hide();
    };


    show = () => {
        this._updatePosition(() => {
            this.setState({
                showDropMenu: true,
            });
        });
    };


    hide = () => {
        this.setState({
            showDropMenu: false,
        });
    };


    select = (idx) => {
        const { item, selectedCallBack } = this.props;
        const { selectedIndex, btnTitle } = this.state;

        if (idx == null || item.list == null || idx >= item.list.length) {
            idx = selectedIndex;
        }
        this.setState({
            selectedIndex: idx,
            btnTitle: item.list[idx].title,
        });
        selectedCallBack && selectedCallBack(item.list[idx], idx, item.tag);
        this.hide();
    };



    _renderButton = () => {
        const { item, style, buttonStyle, buttonTextStyle } = this.props;
        const { showDropMenu, btnTitle } = this.state;

        let defaultIcon = this.props.showDefaultIcon || require('./load_down.png');
        let showDropIcon = this.props.showDropIcon || require('./load_up.png');

        let icon = showDropMenu ? showDropIcon : defaultIcon;

        return (
            <TouchableOpacity
                ref={button => this._button = button}
                onPress={this._onButtonPress}>
                <View style={[styles.button, buttonStyle, { width: style.width }]}>
                    <Text style={[styles.buttonText, buttonTextStyle]}
                        numberOfLines={1}>
                        {btnTitle}
                    </Text>
                    <Image style={{ marginLeft: 4 }}
                        source={icon} />
                </View>
            </TouchableOpacity>
        );

    }


    _onButtonPress = () => {
        this.show();
    };


    _renderDropList = () => {
        const { showDropMenu, selectedIndex } = this.state;
        const { style, item, dropdownStyle } = this.props;

        if (showDropMenu && this._buttonFrame) {
            let frameStyle = this._calcPosition();
            return (
                <Modal animationType='fade'
                    transparent={true}
                >
                    <TouchableWithoutFeedback onPress={this._onModalPress}>
                        <View style={[styles.modal]}>
                            <View style={frameStyle}>
                                <ScrollView style={[{backgroundColor:'white'},dropdownStyle, { width: style.width }]}>
                                    {
                                        item.list ? item.list.map((sublist, i) => {
                                            let hasIcon = (sublist.icon != null);
                                            return (
                                                <TouchableHighlight
                                                    onPress={() => this.select(i)}
                                                    key={i}
                                                    underlayColor='lightgray'
                                                >
                                                    <View style={[{flexDirection:'row', height: this.props.rowHeight || rowHeight, justifyContent: 'center', alignItems: 'center' }, this.rowViewStyle, selectedIndex === i && { backgroundColor: this.props.rowViewSelectedStyle.backgroundColor || '#cccccc' }]}
                                                    >
                                                        {
                                                            hasIcon ?
                                                                <Image source={sublist.icon} style={{ justifyContent: 'center', }}>
                                                                </Image> : null
                                                        }

                                                        <Text style={[styles.rowText, this.props.rowTextStyle, selectedIndex === i && { color: this.props.rowTextSelectedStyle.color || 'blue' }]}>
                                                            {sublist.title}
                                                        </Text>
                                                            

                                                    </View>
                                                </TouchableHighlight>
                                            )
                                        }) : null
                                    }
                                </ScrollView>
                            </View>

                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            );
        }
    };


    _calcPosition = () => {
        let dimensions = Dimensions.get('window');
        let windowWidth = dimensions.width;
        let windowHeight = dimensions.height;

        // 下拉框的高度 如果外部设置则用外部设置的 没有就是默认100
        let dropdownHeight = (this.props.dropdownStyle && StyleSheet.flatten(this.props.dropdownStyle).height) ||
            StyleSheet.flatten(styles.dropdown).height;

        let bottomSpace = windowHeight - this._buttonFrame.y - this._buttonFrame.height;
        let rightSpace = windowWidth - this._buttonFrame.x;
        let showInBottom = bottomSpace >= dropdownHeight || bottomSpace >= this._buttonFrame.y;
        let showInLeft = rightSpace >= this._buttonFrame.x;


        // 先取dropdownStyle.width;若不存在,再取style.width
        let width = null;
        let dropdownWidth = (this.props.dropdownStyle && StyleSheet.flatten(this.props.dropdownStyle).width) ||
            (this.props.style && StyleSheet.flatten(this.props.style).width) || -1;
        if (dropdownWidth !== -1) {
            width = dropdownWidth;
        }

        var style = {
            left: this._buttonFrame.x,
            height: dropdownHeight,
            top: (showInBottom ? this._buttonFrame.y + this._buttonFrame.height : Math.max(0, this._buttonFrame.y - dropdownHeight)) - 0.5,
            width: width
        }

        // if (showInLeft) {
        //     style.left = this._buttonFrame.x;
        // } else {
        //     // 先取dropdownStyle.width;若不存在,再取style.width
        //     let dropdownWidth = (this.props.dropdownStyle && StyleSheet.flatten(this.props.dropdownStyle).width) ||
        //         (this.props.style && StyleSheet.flatten(this.props.style).width) || -1;
        //     if (dropdownWidth !== -1) {
        //         style.width = dropdownWidth;
        //     }
        //     style.right = rightSpace - this._buttonFrame.width;
        // }
        return style;
    };

    render() {
        return (
            <View {...this.props}>
                {this._renderButton()}
                {this._renderDropList()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'white',
        borderRightColor: borderColor,
        borderRightWidth: lineWidth,
        borderBottomColor: borderColor,
        borderBottomWidth: lineWidth,
    },
    buttonText: {
        fontSize: 13,
    },
    modal: {
        flex: 1,
    },
    dropdown: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderBottomColor: borderColor,
        borderBottomWidth: lineWidth,
        borderRightColor: borderColor,
        borderRightWidth: lineWidth,
        borderLeftColor: borderColor,
        borderLeftWidth: lineWidth,
        height: 100,
    },
    loading: {
        alignSelf: 'center',
    },
    list: {
        flex: 1,
    },
    rowText: {
        marginLeft: 10,
        fontSize: 14,
        color: 'black',
        textAlignVertical: 'center',
    },
    highlightedRowText: {
        color: 'black',
    },
    separator: {
        height: lineWidth,
        backgroundColor: 'lightgray',
    },
    listCellStyle: {
        height: rowHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listCellS: {
        backgroundColor: borderColor,
    },
});
