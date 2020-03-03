import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Navigator from './generalAuth/Navigator'

import Dashboard from './Dashboard'

const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator
    initialRouteName="Auth"
    headerMode='screen'
  >
    <Stack.Screen name="Auth" component={Navigator} options={{ headerShown: false }} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
)
