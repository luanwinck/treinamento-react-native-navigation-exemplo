import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootNavigation } from './root.navigation';
import { BottomTab } from '../components/bottom-tab/bottom-tab.component'
import { SettingsScreen } from '../screens/settings/settings.screen';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={RootNavigation} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}