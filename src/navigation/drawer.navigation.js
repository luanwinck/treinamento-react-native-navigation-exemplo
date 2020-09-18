import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/home/home.screen';
import { DeatilScreen } from '../screens/detail/detail.screen';
import { RootNavigation } from './root.navigation';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="RootNavigation" component={RootNavigation} />
    </Drawer.Navigator>
  )
}