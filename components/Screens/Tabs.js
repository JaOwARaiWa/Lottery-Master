import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import RandomScreen from './Random';
import ProfileScreen from './Profile';
import { Icon } from 'react-native-ui-kitten'

const Tab = createBottomTabNavigator();

const TabsBar = () => {
	return (
		<Tab.Navigator screenOptions={{gestureEnabled: false}} initialRouteName="Home" tabBarOptions={{showLabel: false, style: {height: 50, backgroundColor: '#333333'}}}>
			<Tab.Screen
				options={{
					headerLeft: null,
					tabBarIcon: ({ focused }) => (
						<Icon
							name='home-outline'
							width={32}
							height={32}
							fill={focused ? '#ffbf00' : 'white'}
						/>
					)
				}}
				
				name="Home" component={HomeScreen}
			/>

			<Tab.Screen
				options={{
					headerLeft: null,
					tabBarIcon: ({ focused }) => (
						<Icon
							name='radio-button-on-outline'
							width={32}
							height={32}
							fill={focused ? '#ffbf00' : 'white'}
						/>
					)
				}}
				
				name="Random" component={RandomScreen}
			/>

			<Tab.Screen
				options={{
					headerLeft: null,
					tabBarIcon: ({ focused }) => (
						<Icon
							name='person-outline'
							width={32}
							height={32}
							fill={focused ? '#ffbf00' : 'white'}
						/>
					)
				}}
				
				name="Profile" component={ProfileScreen}
			/>

		</Tab.Navigator>
	);
};

export default TabsBar;

