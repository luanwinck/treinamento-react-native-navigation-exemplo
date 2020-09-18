import React from 'react'
import { View, Text, Button } from 'react-native';

export function PLayerScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Player Screen</Text>
      <Button onPress={() => navigation.jumpTo('Home')} title='Go back' />
    </View>
  );
}