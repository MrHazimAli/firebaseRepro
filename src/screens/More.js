import React, { Component } from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const tabBarIcon = name => ({ tintColor }) => (
	<Icon name={name} size={24} color={tintColor} />
)

export default class More extends Component {

	static navigationOptions = {
    tabBarIcon: 'ios-airplane',
    title: 'More'
  };

	render() {
		return (
			<View>
				<Text>More</Text>
			</View>
		)
	}
}