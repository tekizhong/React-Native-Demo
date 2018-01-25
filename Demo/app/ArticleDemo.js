'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';


var Article = React.createClass({
    render: function(){
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.title]}>{this.props.title}</Text>
                <Text style={styles.text}>{this.props.author}</Text>
                <Text style={styles.text}>{this.props.time}</Text>
            </View>
        );
    }
});



var ArticeDemo = React.createClass({
    getInitialState: function(){
        var data = [
            {
                title: "React-Native入门指南",
                author: "vczero",
                time: "2015-06-28"
            },
            {
                title: "为什么世界不一样",
                author: "vczero",
                time: "2015-06-8"
            },
            {
                title: "你来，我就告诉你",
                author: "vczero",
                time: "2015-04-01"
            }
        ];
        return {
            articles: data
        };
    },
    render: function(){
        return(
            <ScrollView>
                {this.state.articles.map(function(article){
                    return <Article title={article.title} author={article.author} time={article.time}/>
                })}
            </ScrollView>
        );
    }
});



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },


    text:{
        color:'red',
    },
    title:{
        color:'gray',
    },
});


module.exports = ArticeDemo;
