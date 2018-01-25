// 参考 http://blog.csdn.net/jan8705_/article/details/52279533

import React, { Component} from 'react';

// 为何这么写 参考 http://www.css88.com/react/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types';

import {
  View,
  StyleSheet,
  Image,
  Animated,
  Text
} from 'react-native';


export default class CollapsibleText extends Component {
    static propTypes = {
        // 这么设置的话可传可不传
        // 文本样式
        style: Text.propTypes.style,
        // 展开文本样式
        expandTextStyle: Text.propTypes.style,
        // 行数
        numberOfLines: PropTypes.number,
    }

    constructor(props){
        super(props)
        this.state = {
            // 文本是否展开
            expanded:true,
            // 默认行数
            numberOfLines:null,
            // 展开收起文字是否处于显示状态
            showExpandText:false,
            // 默认展开显示文字
            expandText: '展开',
            // 是否处于测量阶段
            measureFlag:true
        };
        this.numberOfLines = props.numberOfLines;
        // 文本是否需要展开收起功能(实际文字内容是否超出numberOfLines限制)
        this.needExpand = true;
        this.measureFlag = true;
    }


    _onTextLayout(event){
        if (this.measureFlag) {
            if (this.state.expanded) {
                this.maxHeight = event.nativeEvent.layout.height;
                this.setState({
                    expanded: false,
                    numberOfLines: this.numberOfLines
                })
            }else {
                this.mixHeight = event.nativeEvent.layout.height;
                if (this.mixHeight == this.maxHeight) {
                    this.needExpand = false;
                }else {
                    this.needExpand = true;
                    this.setState({
                        showExpandText: true
                    })
                }
                this.measureFlag = false;
            }
        }
    }


    _onPressExpand(){
        if (!this.state.expanded) {
            this.setState({
                numberOfLines: null,
                expandText: '收起',
                expanded: true
            })
        } else {
            this.setState({
                numberOfLines: this.numberOfLines,
                expandText: '展开',
                expanded: false
            })
        }
    }


    render() {
        const { numberOfLines, onLayout,expandTextStyle,...rest} = this.props;
        let expandText = this.state.showExpandText?(
            <Text
                style = {[this.props.style,styles.expandText,expandTextStyle]}
                onPress = {this._onPressExpand.bind(this)}>
                {this.state.expandText}
            </Text>
        ):null;
      return (
          <View>
              <Text numberOfLines = {this.state.numberOfLines}
                  onLayout = {this._onTextLayout.bind(this)}
                  {...rest}>
                      {this.props.children}
                  </Text>
                  {expandText}
          </View>
      );
    }
}


const styles = StyleSheet.create({
  expandText: {
    color:'blue',
    marginTop:0
    }
});
