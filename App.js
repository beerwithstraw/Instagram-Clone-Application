import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import DiscoveryScreen from './screens/DiscoveryScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 
const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2C6BED"},
  headerTitleScreen: {color: "white"},
  headerTintColor: "white"
}
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {/* <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Home'/>
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Discovery' component={DiscoveryScreen} />
        <Tab.Screen name='Post' component={HomeScreen} />
        <Tab.Screen name='Notifications' component={HomeScreen} />
        <Tab.Screen name='Profile' component={HomeScreen} />
      </Tab.Navigator>
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
