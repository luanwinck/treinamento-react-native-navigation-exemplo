import React from 'react'

import { View, Text, Button } from 'react-native'

export const SettingsScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate('Detail')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Settings Screen</Text>
      <Button title='Go to Detail Screen' onPress={navigate} />
    </View>
  )
}