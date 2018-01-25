//  参考 http://www.jianshu.com/p/c52005107d81
// 因为是分组的ListView，显然设置数据源的方法就应该用cloneWithRowsAndSections

import React, {Component} from 'react';

import {View, StyleSheet, ListView, Text, Image} from 'react-native';

var ThirdView = React.createClass({
    getInitialState() {
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        }

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        }

        // 因为这里我们需要返回区的数据，所以我们需要提供方法来提取行数据和section标题
        return {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        }
    },

    //从上面的图片我们可以看出提取函数处理的数据的形式，其实就是个二维数组，
    //制作假数据
    getLocaData() {
        var Arr = {},
            sectionIDs = [], //所有区ID的数组
            rowIDs = []; //行ID数组
        //通过两次for循环创建假数据
        for (var i = 0; i < 10; i++) {
            sectionIDs.push(i);
            Arr[i] = 'section' + i;
            rowIDs[i] = [];
            for (var j = 0; j < 5; j++) {
                rowIDs[i].push(j);
                Arr[i + ':' + j] = 'section' + i + '--row' + j;
            }
        }
        //重新设置ListView的数据源，刷新表
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(Arr, sectionIDs, rowIDs)
        })
    },
    render() {
        return (<ListView //创建表，并设置返回section和cell的方法
    dataSource={this.state.dataSource} renderRow={this.renderRow} renderSectionHeader={this.renderSectionHeader} contentContainerStyle={styles.listViewStyle}/>)
    },
    //这个方法相当于iOS的viewDidload方法，通常用于网络请求，返回数据之后重新刷新表,这里让它调用制作假数据的方法，然后刷新表
    componentDidMount() {
        this.getLocaData();
    },
    //返回cell的方法
    renderRow(rowData, sectionID, rowID, highlighRow) {
        return (
            <View style={styles.cellStyle}>
                <Image style={styles.imageStyle}/>
                <Text>{rowData}</Text>
            </View>
        )
    },
    //返回section的方法
    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.sectionStyle}>
                <Text>{sectionData}</Text>
            </View>
        )
    }
})

//样式
const styles = StyleSheet.create({
    sectionStyle: {
        backgroundColor: 'gray',
        height: 25
    },
    cellStyle: {
        flexDirection: 'row', //设置横向布局
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        alignItems: 'center' //交叉轴的对齐方式
    },
    imageStyle: {
        width: 70,
        height: 70,
        backgroundColor: 'red',
        margin: 20
    }
});
module.exports = ThirdView;
