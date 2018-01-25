'use strict';

import React, {Component} from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
    Text,
    Image,
    ScrollView
} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';

export default class WeixinTabBar extends Component {

	propTypes = {
		goToPage: React.PropTypes.func, // 跳转到对应tab的方法
		activeTab: React.PropTypes.number, // 当前被选中的tab下标
		tabs: React.PropTypes.array, // 所有tabs集合

		tabNames: React.PropTypes.array, // 保存Tab名称
		tabIconNames: React.PropTypes.array, // 保存Tab图标
    }
    
    static defaultProps = {
        tabIconNames : [require('./load_up.png'),require('./load_up.png'),require('./load_up.png'),require('./load_up.png'),require('./load_up.png'),require('./load_up.png')]
    }

	setAnimationValue({value}) {
		console.log(value);
	}

	componentDidMount() {
		// Animated.Value监听范围 [0, tab数量-1]
		this.props.scrollValue.addListener(this.setAnimationValue);
	}

	renderTabOption(tab, i) {
		let color = this.props.activeTab == i ? "#6B8E23" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
		return (
			<TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab}>
				<View style={[styles.tabItem,{width:80}]}>
					<Image source = {this.props.tabIconNames[i]}></Image>
					<Text style={{color: color}}>
						{this.props.tabNames[i]}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		return (
            <ScrollView style={styles.tabs}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            directionalLockEnabled={true}
            bounces={false}
            scrollsToTop={false}
            >
				{this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	tabs: {
		flexDirection: 'row',
		height: 50,
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
	},
});


