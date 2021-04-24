import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './LogIn'
import Home from './Home'
import Random from './Random'
import SignUp from './SignUp'

const RootStack = createStackNavigator();

const RootStackScreen = () => {
	<RootStack.Navigator headerMode='none'>
		<RootStack.Screen name="Login" component={Login} />
		<RootStack.Screen name="Home" component={Home}  />
		<RootStack.Screen name="Random" component={Random}  />
		<RootStack.Screen name="SignUp" component={SignUp}  />
	</RootStack.Navigator>
};

export default RootStackScreen;