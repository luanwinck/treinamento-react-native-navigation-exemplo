import React, { useState, useEffect } from 'react'
import { View, Text, Button, BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

export function HomeScreen({ navigation, route }) {
  const [count, setCount] = useState(0)
  const isFocused = useIsFocused()

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     alert('Foi focado!')
  //   })

  //   return unsubscribe
  // }, [])

  useEffect(() => {
    if (isFocused) {
      setCount(0)

      BackHandler.addEventListener('hardwareBackPress', () => {
        alert('teste')

        return true
      })

      return BackHandler.removeEventListener('hardwareBackPress')
    }
  }, [isFocused])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginVertical: 40 }}>
        <TouchableOpacity onPress={() => setCount(count - 1)} >
          <Text style={{ fontSize: 22 }} >-</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 22 }}>{count}</Text>

        <TouchableOpacity onPress={() => setCount(count + 1)} >
          <Text style={{ fontSize: 22 }} >+</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={() => navigation.navigate('Detail', { count })} title='Go to Detail Screen' />
      <Button onPress={() => navigation.jumpTo('Settings', { count })} title='Go to Settings Screen' />
      <Button onPress={() => navigation.openDrawer()} title='Open Drawer' />
    </View>
  );
}