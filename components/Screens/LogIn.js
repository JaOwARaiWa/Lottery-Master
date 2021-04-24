import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native';
import Header from '../Header';
import { StatusBar } from 'expo-status-bar';

const LogInScreen = ({ navigation }) => {
	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

	const onPressLogin = () => {
		if (username == "admin" && password == "187417")
		{
			return navigation.navigate('Home', {name: 'Home'});
		}
		else
		{
			Alert.alert('Warning', `Please enter your 'Username' and 'Password'.`, {text: 'OK'});
		}
	}

	// For test app
	// const onPressLogin = () => {
		
	// 	return navigation.navigate('Home', {name: 'Home'});
		
	// } 

	const onPressSignUp = () => {
		return navigation.navigate('SignUp', {name: 'SignUp'});
	}

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.view}>
			<StatusBar style='auto' />
			<Header />
			<View style={styles.inputView}>
				<TextInput
					style={styles.textInput}
					placeholder="Username"
					placeholderTextColor="#566270"
					onChangeText={(username) => setUsername(username)}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					placeholderTextColor="#566270"
					secureTextEntry={true}
					onChangeText={(password) => setPassword(password)}
				/>
			</View>

			<TouchableOpacity style={styles.button} title="Login" onPress={onPressLogin}>
				<Text style={styles.buttonText}>
					Login
				</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.label} title="Reigister" onPress={onPressSignUp}>
				<Text style={styles.labelText}>
					Sign Up
				</Text>
			</TouchableOpacity>

		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
  	view: {
		flex: 1,
	  	backgroundColor: '#f8e8cb',
    	alignItems: 'center',
    	justifyContent: 'center',
  	},
  	inputView: {
		backgroundColor: '#ffc0cb',
		borderRadius: 30,
		borderColor: 'black',
		borderWidth: 1,
		width: '70%',
		height: 50,
		marginBottom: 20,
		paddingLeft: 30,
  	},
  	textInput: {
		height: 60,
		flex: 1,
		paddingLeft: 0,
		paddingRight: 0,
  	},
	button: {
		backgroundColor: '#81c4e7',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 30,
		width: '30%',
        padding: 10,
        marginTop: 40,
		fontSize: 30,
	},
	buttonText: {
		color: 'white',
        fontSize: 20,
        textAlign: 'center',
	},
	labelText: {
		color: 'grey',
        fontSize: 15,
        textAlign: 'center',
	},
	label: {
		backgroundColor: 'transparent',
		width: '20%',
        padding: 10,
        marginTop: 30,
	},
});

export default LogInScreen;
