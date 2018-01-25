// 参考：http://blog.csdn.net/syg90178aw/article/details/51647262


import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  Modal,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

var {width,height, scale} = Dimensions.get('window');

export default class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
    }

    // 加载完成
    componentDidMount(){

    }

    // view卸载
    componentWillUnmount(){

    }

    // 自定义方法
    _leftButtonClick(){

    }

    _rightButtonClick(){
        console.log('右侧按钮点击了');
        this._setModelVisible();
    }

    _setModelVisible(){
        let isShow = this.state.show;
        this.setState({
            show: !isShow,
        });
    }


    render() {
    let modalBackgroundStyle = {
        backgroundColor:'rgba(0, 0, 0, 0.5)',
  };
      return (
          <View style = {styles.container}>
                <TouchableHighlight onPress = {this._setModelVisible.bind(this)}>
                    <Text style = {{justifyContent:'center',alignItems:'center'}}>点击显示弹出框</Text>
                </TouchableHighlight>              
              <Modal
                  animationType = {'fade'}
                  transparent = {true}  //是否透明
                  visible = {this.state.show}
                  onShow = {()=>{}}
                  onRequestClose = {()=>{}}  //安卓平台必须要有
                  > 
                  <View style = {[styles.modalStyle,modalBackgroundStyle]}>
                      <View style = {styles.subView}>
                          <Text style = {styles.titleText}>
                              提示
                          </Text>
                          <Text style = {styles.contentText}>
                              Modal显示的View 多行了超出一行了会怎么显示，就像这样显示了很多内容该怎么显示，看看效果
                          </Text>
                          <View style = {styles.horizontalLine}/>
                          <View style = {styles.buttonView}>
                              <TouchableHighlight underlayColor='transparent'
                                  style = {styles.buttonStyle}
                                  onPress = {this._setModelVisible.bind(this)}>
                                <Text style = {styles.buttonText}>
                                    取消
                                </Text>
                              </TouchableHighlight>
                              <View style = {styles.verticalLine}/>
                              <TouchableHighlight underlayColor = 'transparent'
                                  style = {styles.buttonStyle}
                                  onPress = {this._setModelVisible.bind(this)}>
                                  <Text style = {styles.buttonText}>
                                      确定
                                  </Text>
                              </TouchableHighlight>
                          </View>
                      </View>
                  </View>
              </Modal>
          </View>
      );
    }
}


// Modal属性
// 1.animationType bool  控制是否带有动画效果
// 2.onRequestClose  Platform.OS==='android'? PropTypes.func.isRequired : PropTypes.func
// 3.onShow function方法
// 4.transparent bool  控制是否带有透明效果
// 5.visible  bool 控制是否显示

// css样式
var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#ECECF0',
    alignItems: 'center',
    justifyContent:'center',

  },
  // modal的样式
  modalStyle: {
    // backgroundColor:'#ccc',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
  },
  // modal上子View的样式
  subView:{
    marginLeft:60,
    marginRight:60,
    backgroundColor:'#fff',
    alignSelf: 'stretch',
    justifyContent:'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor:'#ccc',
  },
  // 标题
  titleText:{
    marginTop:10,
    marginBottom:5,
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  },
  // 内容
  contentText:{
    margin:8,
    fontSize:14,
    textAlign:'center',
  },
  // 水平的分割线
  horizontalLine:{
    marginTop:5,
    height:0.5,
    backgroundColor:'#ccc',
  },
  // 按钮
  buttonView:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle:{
    flex:1,
    height:44,
    alignItems: 'center',
    justifyContent:'center',
  },
  // 竖直的分割线
  verticalLine:{
    width:0.5,
    height:44,
    backgroundColor:'#ccc',
  },
  buttonText:{
    fontSize:16,
    color:'#3393F2',
    textAlign:'center',
  },
});
