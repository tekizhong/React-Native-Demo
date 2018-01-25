// 参考 http://www.jianshu.com/p/c52005107d81
// 改变ListView的主轴方向，让ListView横向布局，然后设置换行显示，就能实现类似
// collectionView的布局了
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');//获取屏幕的宽高
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

var SecondView = React.createClass({
      getInitialState(){
          //初始化数据源
          var ds = new  ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
          return{
               dataSource : ds.cloneWithRows(this.getRows({}))
          }
      },
      //制作假数据
      getRows(){
            var Arr = [];
            for(var i = 0; i<100; i++){
                   Arr.push(
                       {
                         image: '111',
                         price:'222'
                      }            )
              }
        return Arr;
      },
      render(){
          return(
                <ListView     //创建ListView
                      dataSource={this.state.dataSource} //设置数据源
                      renderRow={this.renderRow} //设置cell
                      contentContainerStyle={styles.listViewStyle}//设置cell的样式
              />)
        },
  //返回cell的方法
    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <View style={styles.bgStyle}>
                <Image style={styles.imageStyle}/>
                <Text style={{fontSize:20,marginBottom:0}}>{rowData.price}</Text>
            </View>            )    }})
//样式
const styles = StyleSheet.create({
        listViewStyle:{
              flexDirection:'row', //设置横向布局
              flexWrap:'wrap'    //设置换行显示
        },
        bgStyle:{
              backgroundColor:'gray',
              width:(ScreenWidth-30)/2, //cell的宽度
              height:250,
              marginLeft:10,
              marginTop:10
        },
        imageStyle:{
              width:(ScreenWidth-30)/2,
              height:230,
              backgroundColor:'red',
              marginBottom:0,
      }
});
module.exports = SecondView;
