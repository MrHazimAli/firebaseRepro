import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { firebaseConnect } from 'react-redux-firebase';

const tabBarIcon = name => ({ tintColor }) => (
	<Icon name={name} size={24} color={tintColor} />
)

@firebaseConnect()
@connect(state => {
	return {
		uid: state.firebase.auth.uid
	}
})
export default class More extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: null
		}
	}

	static navigationOptions = {
    tabBarIcon: tabBarIcon('ios-attach'),
    title: 'More'
  };

  _renderButton = (label) => (
  	<View style={styles.button}>
			<Text style={styles.text}>{label}</Text>
		</View>
  )

  onLogin = () => {
  	const { email, password } = this.state

  	if(email && password) {
  		this.props.firebase.login({email, password})
  	} else {
  		this.setState({ error: 'both field is required'})
  	}
  	
  }

  onRegister = () => {
  	const { email, password } = this.state

  	if(email && password) {
  		this.props.firebase.createUser(
  			{email, password},
  			{ name: 'Someone', email, role: 'superman' }
  		)
  	} else {
  		this.setState({ error: 'both field is required'})
  	}
  }

  onLogout = () => {
  	this.props.firebase.logout()
  }

	render() {
		const { email, password, error } = this.state;
		const { uid } = this.props;

		return (
			<View style={styles.container}>
				<TextInput
					style={{ height: 40, borderColor: '#ececec', borderWidth: 1, marginBottom: 10 }}
					value={email}
					autoCapitalize='none'
					onChangeText={(email) => this.setState({ email })}
				/>
				<TextInput
					style={{ height: 40, borderColor: '#ececec', borderWidth: 1 }}
					value={password}
					autoCapitalize='none'
					onChangeText={(password) => this.setState({ password })}
					secureTextEntry
				/>

				{error &&
					<Text style={styles.error}>{error}</Text>
				}

				<TouchableOpacity onPress={this.onLogin}>
					{this._renderButton('Login')}
				</TouchableOpacity>

				<TouchableOpacity onPress={this.onRegister}>
					{this._renderButton('Register')}
				</TouchableOpacity>

				{uid &&
					<TouchableOpacity onPress={this.onLogout}>
						{this._renderButton('Logout')}
					</TouchableOpacity>
				}
				
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		padding: 20
	},
	button: {
		height: 50,
		backgroundColor: 'blue',
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10
	},
	text: {
		fontSize: 20,
		color: '#fff',
		fontWeight: 'bold'
	},
	error: {
		marginTop: 10,
		color: 'red',
		textAlign: 'center'
	}
})