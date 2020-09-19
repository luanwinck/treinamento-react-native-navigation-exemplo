import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { HomeScreen } from '../screens/home/home.screen'
import { StackNavigation } from './stack.navigation'
import { Platform } from 'react-native'

const Drawer = createDrawerNavigator()

const drawerPosition = Platform.select({
  'android': 'right',
  'ios': 'left',
})

export const DrawerNavigation = () => { 
  return (
    <Drawer.Navigator drawerPosition={drawerPosition} >
      <Drawer.Screen  name='Home' component={HomeScreen} /> 
      <Drawer.Screen  name='StackNavigation' component={StackNavigation} /> 
    </Drawer.Navigator>
  )
}