import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  AuthScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
} from '.'

import theme from '../../style/theme'


const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName="AuthScreen"
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
  </Stack.Navigator>
)

