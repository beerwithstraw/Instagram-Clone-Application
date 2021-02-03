import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Router from './assets/components/Router'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content"/>
      <Router />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
