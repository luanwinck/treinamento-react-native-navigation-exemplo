import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/home.screen';
import { DeatilScreen } from '../screens/detail/detail.screen';

const Stack = createStackNavigator();

export const ModalNavigation = () => {
  return (
    <Stack.Navigator mode='modal'>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Dashboard' }} />
      <Stack.Screen name="Detail" component={DeatilScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}