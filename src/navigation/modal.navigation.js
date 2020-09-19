import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/home/home.screen'
import { DetailScreen } from '../screens/detail/detail.screen'
import { SettingsScreen } from '../screens/settings/settings.screen'

const Stack = createStackNavigator()

export const ModalNavigation = () => {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Dashboard' }} />
      <Stack.Screen name='Detail' component={DetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}