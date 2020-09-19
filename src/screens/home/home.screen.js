import React, { useState, useEffect } from 'react'

import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useIsFocused } from '@react-navigation/native'

export const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      setCount(0)
    }
  }, [isFocused])

  const navigate = () => {
    navigation.push('Detail')
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
      <Text>Home Screen</Text>
      <Button title='Go to Detail Screen' onPress={navigate} />

      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginVertical: 40 }} >
        <TouchableOpacity onPress={() => setCount(count - 1)}>
          <Text style={{ fontSize: 22 }} > - </Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 22 }} >{count}</Text>

        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={{ fontSize: 22 }} > + </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}