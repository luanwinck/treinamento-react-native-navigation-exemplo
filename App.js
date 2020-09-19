import 'react-native-gesture-handler';

import React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

// Navigations
import { StackNavigation } from './src/navigation/stack.navigation';
import { TabNavigation } from './src/navigation/tab.navigation';
import { DrawerNavigation } from './src/navigation/drawer.navigation';
import { ModalNavigation } from './src/navigation/modal.navigation'

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <SafeAreaView style={{ backgroundColor: 'black' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#ffd700' }} >
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

