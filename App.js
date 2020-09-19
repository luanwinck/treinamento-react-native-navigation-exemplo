import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

// Navigations
import { RootNavigation } from './src/navigation/root.navigation';
import { DrawerNavigation } from './src/navigation/drawer.navigation';
import { TabNavigation } from './src/navigation/tab.navigation';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <SafeAreaView style={{ backgroundColor: 'black' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffd700' }}>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
