import React,{Component} from 'react';
import { Modal,Image,Dimensions, View ,StyleSheet,TouchableOpacity,ScrollView,Text} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import ImageZoom from 'react-native-image-pan-zoom';
const images = [{
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}, {
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'
}];


let imgsDesc = [
    "主播上午有事不在公司，拍摄安排被调到了下午，小侯就提前在电脑面前到处浏览网站，找下一周视频的拍摄主题。视频一旦拍出来就要赶紧制作，刚制作完上传到网上又要开始下一期栏目的剧本构思，主题内容既要是当下热点又要能维持热度直到视频上传，还要考虑适合远近镜头的表现和镜头的切换等，所以小侯每周最头疼的事情就是拍摄主题。",
    "徐小明是陕西西安东岭旗下的业务员！",
    "恒大地产集团信息化中心！"
];

export default class ImageZoomViewerDemo extends React.Component {
    constructor(){
        super();
        this.state = {
            isImageShow:false,
            imageIndex:1,
        }
    }

    _openMax(source, index){
        this.setState({
            isImageShow: true,
            imageIndex: index,
        });
    }

    _renderImage(item, index){
        let url = item.url;
        let source = {uri: url};
        return (
            <View style={{alignItems: 'center', marginTop: 5, marginLeft: 5}} key={'image' + index}>
                <TouchableOpacity onPress={this._openMax.bind(this, source, index)}>
                    <Image source={source}
                           style={styles.img}/>
                </TouchableOpacity>
            </View>
        );
    }

    render(){
        return (
            // <Modal visible={true} transparent={true}>
            //     <ImageViewer imageUrls={images}/>
            // </Modal>
            <View>
            {
                images.map((item,index)=>{
                    return this._renderImage(item, index);
                })
            } 
                {this.state.isImageShow ?
                    <Modal visible={true} transparent={true}
                           onRequestClose={()=> {
                               this.setState({
                                   isImageShow: false,
                               });
                           }}>
                        <ImageViewer imageUrls={images}
                                     onCancel={()=> {
                                         this.setState({
                                             isImageShow: false,
                                         });
                                     }}
                                     onClick={()=> {
                                        this.setState({
                                            isImageShow: false,
                                        });
                                    }}
                                     index={this.state.imageIndex}
                                     saveToLocalByLongPress={false}
                                     renderFooter={(currentIndex) => {
                                        return (
                                            <ScrollView style={{ height: 70, marginTop: -70 }}>
                                                <Text style={{ color: '#fff', paddingLeft: 10, paddingRight: 10 }}>{imgsDesc[currentIndex]}</Text>
                                            </ScrollView>
                                        );
                                    }
                                    } />
                    </Modal>
                    : null}
                    </View>
           
        )
    }
}


const styles = StyleSheet.create({
    img:{
        width:100,
        height:100,
    }
})