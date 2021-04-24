import 'react-native-gesture-handler';
import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogInScreen from './components/Screens/LogIn';
import SignUpScreen from './components/Screens/SignUp';
import WebScreen from './components/Screens/Web';
import TabsBar from './components/Screens/Tabs';
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

const Stack = createStackNavigator();

function App() {
  return (
	<Fragment>
    	<IconRegistry icons={EvaIconsPack} />
    	<ApplicationProvider mapping={mapping} theme={lightTheme}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{gestureEnabled: false}} >
					<Stack.Screen  options={{ headerShown: false }} name="Log In" component={LogInScreen} />
					<Stack.Screen  options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
					<Stack.Screen  options={{ headerShown: true, title: 'ตรวจสลาก', headerTintColor: 'white', headerStyle: {backgroundColor: '#d12530'} }} name="Web" component={WebScreen} />
					<Stack.Screen options={{ headerLeft: null, headerShown: false, }} name="Home" component={TabsBar} />
				</Stack.Navigator>
			</NavigationContainer>
    	</ApplicationProvider>
  	</Fragment>

	
  );
}

export default App;