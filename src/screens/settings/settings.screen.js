import React from 'react'
import { View, Text, Button } from 'react-native';
import { TabActions } from '@react-navigation/native';

export function SettingsScreen({ navigation, route }) {
  const navigate = () => {
    const jumpToAction = TabActions.jumpTo('Home', { screen: 'Home', user: 'Satya' });

    navigation.dispatch(jumpToAction);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Player Screen {route.params?.count}</Text>
      <Button onPress={navigate} title='Go back' />
    </View>
  );
}