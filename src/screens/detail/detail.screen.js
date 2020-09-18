import React from 'react'
import { View, Text, Button } from 'react-native';

export function DeatilScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen {route.params?.count}</Text>
      <Button onPress={() => navigation.push('Detail')} title='Go to Other Screen' />
      <Button onPress={() => navigation.navigate('Home')} title='Go back' />
    </View>
  );
}