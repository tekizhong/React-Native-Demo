import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {
  },
  slide: {
    // flex: 1,
    width:width,
    height:200,
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    height:170,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  pageStyle:{
    position:'absolute',
    right:10,
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  }
}

const renderPagination = (index, total, context) => {
  const childrens = context.props.children;
  const title = childrens[index].props.title.props.children;
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class extends Component {

  constructor(){
    super();
    this.state = {
      index:0,
    }
    this.data = [{
      title:'Aussie tourist dies at Bali hotel',
      image:require('./img/1.jpg'),
  },
  {
    title:'Big lie behind Nine’s new show',
    image:require('./img/2.jpg'),
  },
  {
    title:'Why Stone split from Garfield',
    image:require('./img/3.jpg'),

  },
  {
    title:'Learn from Kim K to land that job',
    image:require('./img/4.jpg'),
  }];
  }
  
  render () {

    return (
        <Swiper
          style={styles.wrapper}
          height = {200}
          renderPagination={renderPagination}
          loop={true}
        >
          {
            this.data.map((item,index)=>{
              console.log('index:'+ index);
              return (
                <View key= {index} style={styles.slide} title={<Text numberOfLines={1}>{item.title}</Text>}>
                  <Image style={styles.image} source={item.image} />
                </View>                
              )
            })
          }
        </Swiper>
    )
  }
}