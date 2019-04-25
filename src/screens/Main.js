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

export default class Main extends Component {

	static navigationOptions = {
    tabBarIcon: 'ios-airplane',
    title: 'Main'
  };

	render() {
		return (
			<View>
				<Text>Main</Text>
			</View>
		)
	}
}