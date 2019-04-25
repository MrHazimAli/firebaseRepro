import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import { withNamespaces } from 'react-i18next';

import * as CounterActions from '../actions/counter';

@firebaseConnect()
@connect(
	state => {
		return ({
			counter: state.counter.get('counter'),
			profile: state.firebase.profile
		})
	},
	dispatch => bindActionCreators(CounterActions, dispatch)
)
class Launch extends Component {

	componentDidMount() {

		this.props.firebase.auth().onAuthStateChanged( user => {
    	if(user) {
    		console.log('user ', user, this.props.profile)

    		setTimeout(() => {
					this.props.navigation.replace('MainHome')
				}, 1000)

    	} else {
    		setTimeout(() => {
					this.props.navigation.replace('MainHome')
				}, 1000)
    		console.log('no user')
    	}
   	})
	}

  render() {

  	const { counter, t } = this.props;

    return (
      <View style={styles.container}>
     		<Text>Launch</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonContainer: {
		flexDirection: 'row'
	},
	title: {
		fontSize: 25,
		marginBottom: 10
	},
	text: {
		fontSize: 25
	},
	label: {
		fontSize: 20,
		color: '#c4c4c4',
		marginHorizontal: 10
	}
})

export default withNamespaces()(Launch);
