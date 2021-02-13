import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import Router from './assets/components/Router'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content"/>
      <Router />
    </NavigationContainer>

  );
}

export default withAuthenticator(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

