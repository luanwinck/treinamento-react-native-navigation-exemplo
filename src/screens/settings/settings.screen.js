import React from 'react'
import { View, Text } from 'react-native';

export function SettingsScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen {route.params?.count}</Text>
    </View>
  )
}