import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens/home/home.screen'
import { SettingsScreen } from '../screens/settings/settings.screen'
import { StackNavigation } from './stack.navigation'
import { BottomTab } from '../components/bottom-tab/bottom-tab.component'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />} >
      <Tab.Screen name='Home' component={StackNavigation} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}