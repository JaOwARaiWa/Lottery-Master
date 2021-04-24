import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const RandomScreen = () => {
    const [count, setCount] = useState(10);
    const [huayNumber, setHuay] = useState("None");

    // function reTicket()
    // {
    //     setCount(count + 10)  
    // }

    function randomLottery()
    {
        if (count > 0)
        {
            setCount(count - 1)
            setHuay(Math.floor(Math.random()*100))
        }
        else
        {
            Alert.alert('Warning', 'Out of ticket', {text: 'OK'});
        }
    }
    
	return (
	    <View style={styles.container}>
            <StatusBar style='light' />
            <View style={styles.header} />

            <Text style={styles.title}>Random Lottery</Text>
            
            <Text style={styles.text}>{huayNumber}</Text>
            
            <Text style={styles.text3} >Your ticket is {count} left</Text>

            <TouchableOpacity style={styles.button} onPress={randomLottery}>
                <Text style={styles.text2} >Random</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.button2} onPress={reTicket}>
                <Text style={styles.text2}>More Ticket</Text>
            </TouchableOpacity> */}
        </View>
	);
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#333',
        height: 20,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 10,
    },
    container: {
        backgroundColor: '#f8e8cb',
        flex: 1,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#81c4e7',
        padding: 10,
        marginTop: 40,
        width: 100,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
    },
    button2: {
        alignItems: 'center',
        backgroundColor: '#FFFFF3',
        borderRadius: 30,
        padding: 10,
        marginTop: 80,
    },
    text: {
        alignItems: 'center',
        fontSize: 100,
        marginTop: 100,
    },
    text2: {
        alignItems: 'center',
        fontSize: 20,
        color: '#000000',
    
    },
    text3: {
        alignItems: 'center',
        fontSize: 20,
        color: '#000000',
        marginTop: 30,
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        marginTop: 60,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

export default RandomScreen;