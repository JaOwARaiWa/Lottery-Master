import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const SignUpScreen = ({ navigation }) => {
    const onPressBack = () => {
        return navigation.navigate('Log In', {name: 'Login'});
    }

	return (
        <View style={styles.container}>
            <View style={styles.bar} />
            <View style={styles.header}>
                <Text style={styles.text}>
                    Register
                </Text>
            </View>
            <StatusBar style='light' />
            
            <View style={styles.box}>    
                <View style={styles.info}>
                    <Text style={styles.TextInput}>
                        Name
                    </Text>                    
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Name"
                        placeholderTextColor="#566270"
                    />
                </View>

                <View style={styles.info}>
                    <Text style={styles.TextInput}>
                        Surname
                    </Text>                    
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Surname"
                        placeholderTextColor="#566270"
                    />
                </View>

                <View style={styles.info}>
                    <Text style={styles.TextInput}>
                        Email
                    </Text>                    
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor="#566270"
                    />
                </View>

                <View style={styles.info}>
                    <Text style={styles.TextInput}>
                        Password
                    </Text>                    
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor="#566270"
                        secureTextEntry={true}
                    />
                </View>

                <View style={styles.info}>
                    <Text style={styles.TextInput}>
                        Confirm password
                    </Text>                    
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm password"
                        placeholderTextColor="#566270"
                        secureTextEntry={true}
                    />
                </View>
                
            </View>
            
            <View style={styles.row}>
                <View style={styles.col}>
                    <TouchableOpacity style={styles.button} title="Back" onPress={onPressBack}>
                        <Text style={styles.buttonText}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.col}>
                    <TouchableOpacity style={styles.button} title="Back" onPress={onPressBack}>
                        <Text style={styles.buttonText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
	);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#bedfef',
        height: '100%',
        alignItems: 'center',
    },
    bar: {
        backgroundColor: '#333',
        height: 20,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10,
    },
    header: {
        backgroundColor: '#ede092',
        height: 100,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10,
    },
    text: {
        color: '#333',
        fontSize: 50,
        marginTop: 20,
        fontWeight: 'bold',
    },
    button: {
		backgroundColor: '#fcdab0',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 30,
		width: '60%',
        padding: 10,
        marginTop: 5,
		fontSize: 30,
	},
    buttonText: {
		color: '#333',
        fontSize: 20,
        textAlign: 'center',
	},
    box: {
        backgroundColor: 'white',
        height: 800,
        width: '90%',
        borderWidth: 3,
        borderColor: '#555',
        borderRadius: 30,
        marginTop: 10,
        flex: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 25,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        paddingLeft: 60,
    },
    col: {
        width: '50%',
        paddingTop: 20,
    },
    inputView: {
		backgroundColor: 'white',
		borderRadius: 30,
		borderColor: 'black',
		borderWidth: 1,
		width: '60%',
		height: 50,
		marginBottom: 35,
		paddingLeft: 30,
        marginLeft: 10,
  	},
  	textInput: {
		height: 60,
		flex: 1,
		paddingLeft: 0,
		paddingRight: 0,
  	},
    info: {
        width: '30%',
        height: 50,
        justifyContent: 'center',
        paddingLeft: 20,
    },
});

export default SignUpScreen;