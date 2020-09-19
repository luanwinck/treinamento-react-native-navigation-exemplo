import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/home/home.screen'
import { DetailScreen } from '../screens/detail/detail.screen'
import { SettingsScreen } from '../screens/settings/settings.screen'

const Stack = createStackNavigator()

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#ffd700',
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Detail' component={DetailScreen} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  )
}