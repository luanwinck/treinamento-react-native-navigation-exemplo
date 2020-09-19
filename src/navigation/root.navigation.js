import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/home.screen';
import { DeatilScreen } from '../screens/detail/detail.screen';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // Disable Header
        headerShown: true,

        // Style Header
        headerStyle: {
          backgroundColor: '#000000'
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTintColor: '#ffd700',
        headerBackTitleVisible: false,

        // Prevent on Drawer
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Dashboard' }} />
      <Stack.Screen name="Detail" component={DeatilScreen} />
    </Stack.Navigator>
  )
}