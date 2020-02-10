import React from 'react'
import StatusBar from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import theme from '../style/theme'

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
    initialRouteName="Auth"
    headerMode='screen'
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerTintColor: theme.colors.secondary
    }}
  >
    <Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false }} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ title: 'Register' }} />
    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ title: 'Forgot Password ' }} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
)
  // :aa TODO ... this is a hack to pass the Paper theme in, but it sets a few good defaults... we should create a proper translation layer
const Routes = () => (
  <NavigationContainer theme={theme}>
    <Navigator />
  </NavigationContainer>
)

export default Routes
