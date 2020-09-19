import React from 'react'

import { View, Text, Button } from 'react-native'

export const DetailScreen = ({ navigation, route }) => {
  const navigate = () => {
    navigation.replace('Settings')
  }

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

      <Text>Detail Screen {route.params?.count}</Text>

      <Button title='Go to Detail Screen' onPress={navigate} />
      <Button title='Go back' onPress={goBack} />
    </View>
  )
}