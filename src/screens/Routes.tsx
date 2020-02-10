import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  AuthScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from '.'

const Stack = createStackNavigator()

const Navigator = () => (
  <Stack.Navigator
    initialRouteName="AuthScreen"
    headerMode="none"
  >
    <Stack.Screen name="AuthScreen" component={AuthScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
)
  
const Routes = () => (
  <NavigationContainer>
    <Navigator />
  </NavigationContainer>
)

export default Routes
