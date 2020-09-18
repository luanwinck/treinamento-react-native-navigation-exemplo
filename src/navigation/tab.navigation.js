import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/home.screen';
import { DeatilScreen } from '../screens/detail/detail.screen';
import { RootNavigation } from './root.navigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';
import { BottomTab } from '../components/bottom-tab/bottom-tab.component'
import { PLayerScreen } from '../screens/player/player.screen';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
      <Tab.Navigator tabBar={(props) => <BottomTab {...props} />}>
      <Tab.Screen name="Home" component={RootNavigation} />
      <Tab.Screen name="Player" component={PLayerScreen} />
    </Tab.Navigator>
  )
}