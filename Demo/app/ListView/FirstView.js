//参考 http://www.jianshu.com/p/c52005107d81

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
  Image} from 'react-native';
var Dimensions = require('Dimensions');//获取屏幕的宽高
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var FirstView = React.createClass({
      getInitialState(){
      var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
      return{
          dataSource:ds.cloneWithRows(this.getRows({}))//初始化数据源
      }
  },
//制作假数据
  getRows(){
        var dataArr = [];
        for (var i = 0; i<100; i++){
              dataArr.push({
                    title: 'Row' + i,
                    text: 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui' + i,
                })
                          }
           return dataArr;
       },
  render(){
       return(
//    创建ListView组件
              <ListView
                     dataSource={this.state.dataSource}//设置数据源
                      renderRow={this.renderRow}//返回cell
             />        )    },
//返回cell的方法
  renderRow(rowData,sectionID,rowID,highlightRow){
             return(
                  <View  style={styles.rightViewStyle}>
                        <Image style={styles.imageStyle}/>
                        <View>
                             <Text style={styles.titleStyle}>{rowData.title}</Text>
                             <Text style={styles.textStyle}>{rowData.text}</Text>
                       </View>
                  </View>        )    }})
//样式
  const styles = StyleSheet.create({
          tabStyle:{
              flex:1
          },
          rightViewStyle:{
                flexDirection:'row',
                borderBottomColor:'#CCCCCC',//cell的分割线
                borderBottomWidth:1
          },
          imageStyle:{
                      width:80,
                      height:80,
                      margin:20,
                      backgroundColor:'red'
          },
           titleStyle:{
                marginTop:20,
                backgroundColor:'yellow'
          },
          textStyle:{
                width:ScreenWidth-140,
                backgroundColor:'green',
                marginBottom:20
        }});
module.exports = FirstView;
