import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const ProfileScreen = ({ navigation }) => {
    const onPressBack = () => {
        return navigation.navigate('Log In', {name: 'Login'});
    }

	return (
		<View style={styles.container}>
            <View style={styles.bar} />
            <View style={styles.header}>
                <Text style={styles.text}>
                    Profile
                </Text>
            </View>
            <StatusBar style='light' />
            
            <View style={styles.box}>
                <View style={styles.imgBoder}>
                    <Image style={styles.img}
                        source={require('../images/profile0.jpg')}
                    />
                </View>

                <View style={styles.info}>
                    <Text style={styles.infoText}>
                        ชื่อผู้ใช้ : NezukoJang
                    </Text>
                    <Text style={styles.infoText}>
                        Email : InwZa1234@gmail.com
                    </Text>
                </View>
                
            </View>
            
            
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} title="Back" onPress={onPressBack}>
				    <Text style={styles.buttonText}>
					    Log out
				    </Text>
			    </TouchableOpacity>
            </View>
        </View>
	);
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d8fbf5',
        alignItems: 'center',
        height: '100%',
    },
    bar: {
        backgroundColor: '#333',
        height: 20,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10,
    },
    header: {
        backgroundColor: '#adfecb',
        height: 80,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10,
    },
    button: {
		backgroundColor: '#81c4e7',
		borderColor: 'black',
		borderWidth: 1,
		borderRadius: 30,
		width: '30%',
        padding: 10,
        marginTop: 5,
		fontSize: 30,
        marginLeft: 250,
	},
    buttonText: {
		color: '#444',
        fontSize: 20,
        textAlign: 'center',
	},
    text: {
        color: '#333',
        fontSize: 50,
        marginTop: 10,
        fontWeight: 'bold',
    },
    box: {
        backgroundColor: '#ecdafa',
        height: 450,
        width: '90%',
        borderWidth: 3,
        borderColor: '#555',
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
    },
    imgBoder: {
        borderWidth: 5,
        borderColor: '#555',
        borderRadius: 5,
        width: 150,
        height: 150,
        marginTop: 5,

    },
    img: {
        width: '100%',
        height: '100%',
    },
    info: {
        backgroundColor: '#fcf9e8',
        borderWidth: 5,
        borderColor: '#555',
        borderRadius: 30,
        width: 300,
        height: 265,
        marginTop: 5,
    },
    infoText: {
        fontSize: 15,
        marginTop: 30,
        marginLeft: 15,
        marginBottom: 5,
    },
});

export default ProfileScreen;