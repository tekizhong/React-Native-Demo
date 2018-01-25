// 参考:http://blog.csdn.net/ddwhan0123/article/details/71632334
// 集成比较麻烦 需要导入react-native/libraries/ART/ART.xcodeproj
import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,//弹窗
    Modal,
    FlatList,
    Dimensions,//用于获取设备屏幕的宽高
    ART,//绘图,Android默认就包含ART库，IOS需要单独添加依赖库 (需要把ART.xcodeproj 文件导入到项目中)
} from 'react-native'
const { width, height } = Dimensions.get('window');
let mwidth = 70;
let mheight = 100;
const bgColor = '#2d2d2d';//背景色,没有设置外部传入
const top = 50;
let dataArray;//列表数据源
class PopupWindowExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: this.props.show,
        }
        //数据传递
        mwidth = this.props.width || 70;
        mheight = this.props.height || 100;
        dataArray = this.props.dataArray;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isVisible: nextProps.show });
    }

    //处理状态
    closeModal() {
        // 这个地方会回调到父组件  再调用设置调用componentWillReceiveProps
        // this.setState({
        //     isVisible: false
        // });
        this.props.closeModal(false);
    }

    render() {
        //绘制路径
        const path = ART.Path();
        path.moveTo(width - 10 - mwidth * 1 / 3 + 3, top);
        path.lineTo(width - 10 - mwidth * 1 / 3 + 9, top - 7);
        path.lineTo(width - 10 - mwidth * 1 / 3 + 15, top);
        path.close();
        return (
                <Modal
                    transparent={true}
                    visible={this.state.isVisible}
                    //动画效果类型
                    animationType={'fade'}

                    onRequestClose={() => this.closeModal()}>
                    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={() => this.closeModal()}>
                        <ART.Surface width={width} height={100} >
                            <ART.Shape d={path} fill={bgColor} />

                        </ART.Surface>
                        <View style={styles.modal}>
                            <FlatList style = {{flex:1}}
                                data = {[{key:'a'},{key:'b'},{key:'c'},{key:'d'},{key:'e'},{key:'f'},{key:'g'},{key:'h'},{key:'i'},{key:'j'},{key:'k'},
                                {key:'l'},{key:'m'},{key:'n'},{key:'o'}]}
                                renderItem = {({item}) => <Text style = {{width:80,height:40}}>{item.key}</Text>}
                                >
                            </FlatList>

                            {/* <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('点击了第1个')} style={styles.itemView}>
                                <Image style={styles.imgStyle} source={require('../res/icon_qr.png')} />
                                <Text style={styles.textStyle}>{dataArray[0]}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('点击了第2个')} style={[styles.itemView, { borderColor: '#999', borderTopWidth: 1, borderBottomWidth: 1 }]}>
                                <Image style={styles.imgStyle} source={require('../res/icon_qr.png')} />
                                <Text style={styles.textStyle}>{dataArray[1]}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={1} onPress={() => Alert.alert('点击了第3个')} style={styles.itemView}>
                                <Image style={styles.imgStyle} source={require('../res/icon_qr.png')} />
                                <Text style={styles.textStyle}>{dataArray[2]}</Text>
                            </TouchableOpacity> */}

                        </View>
                    </TouchableOpacity>
                </Modal>
        )
    }
}


export default class MenuModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
    }

    setPopoverShow(){
        let show = this.state.show;
        this.setState({
            show: !show,
        })
    }

    render() {
      return (

          <View>
          <TouchableOpacity onPress={this.setPopoverShow.bind(this)}>
              {/* <Image style={styles.imgStyle} source={require('../res/icon_qr.png')} /> */}
              <Text style={styles.textStyle} style = {{marginLeft:100,marginTop: 100}}>展示列表</Text>
        </TouchableOpacity>
        <PopupWindowExample show = {this.state.show}
            dataArray = {["text1","text2","text3"]}
            closeModal = {(show)=>{
            this.setPopoverShow(); //这个地方回调是让show状态置反
        }}/>
        </View>
      );
    }
}

//样式链
const styles = StyleSheet.create({
   container : {
        width: width,
        height: height,
    },
    modal: {
        backgroundColor: bgColor,
        // opacity:0.8,
        width: mwidth,
        height: mheight,
        position: 'absolute',
        left: width - mwidth - 10,
        top: top,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    itemView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 2,
    },
    imgStyle: {
        width: 12,
        height: 12,
    }
});
