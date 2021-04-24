import 'react-native-gesture-handler';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({title}) => {
	return (
		<View style={styles.header} >
            <Text style={styles.text}>{title}</Text>
		</View>
	)
}

Header.defaultProps = {
    title: 'Lottery Master'
}

const styles = StyleSheet.create({
	header: {
		height: 60,
        width: 300,
        padding: 15,
        borderRadius: 30,
        backgroundColor: '#eddd82',
        marginBottom: 100,
        marginTop: 20,
        borderColor: 'black',
		borderWidth: 1,
        justifyContent: 'center',
	},
    text: {
        color: '#383a3f',
        fontSize: 24,
        textAlign: 'center',
    },
})

export default Header;
