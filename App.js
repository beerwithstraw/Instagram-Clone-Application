import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import Foundation from "react-native-vector-icons/Foundation";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

import Logo from './assets/Instagram-Logo.png'
import IGBlack from './assets/IG-Black.png' 

import HomeScreen from './screens/HomeScreen';
import DiscoveryScreen from './screens/DiscoveryScreen';
import PostScreen from './screens/PostScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 

function HomeStackScreen () {
  return (
    <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
  )
}
const globalScreenOptions = {
  title: "Instagram",
  headerStyle: {backgroundColor: "white"},
  headerTitleScreen: {color: "black"},
  headerTintColor: "black",
  headerTitle: () => (
    <Image source={Logo} resizeMode="contain" style={{width: 120, height:80 }}/>
  ),
  headerLeft: () => (
    <Feather name="camera" size={25} color={'#000'} styles={{
      
    }}/>
  ),
  headerLeftContainerStyle: {
    marginLeft: 15,
  },
  headerRight: () => (
    <IoniconsIcon name="paper-plane-outline" size={25} color="#000"/>
  ),
  headerRightContainerStyle: {
    marginRight: 15,
  },
}
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <Foundation name="home" size={size} color={color} />;
            }
            if (route.name === 'Discovery') {
              return <Feather name="search" size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return <Feather name="plus-square" size={size} color={color} />;
            }
            if (route.name === 'Notifications') {
              return <AntDesign name="hearto" size={size} color={color} />;
            }
            if (route.name === 'Profile') {
              return <Ionicons name="person-outline" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
      >
        <Tab.Screen name='Home' component={HomeStackScreen} />
        <Tab.Screen name='Discovery' component={DiscoveryScreen} />
        <Tab.Screen name='Post' component={PostScreen} />
        <Tab.Screen name='Notifications' component={NotificationsScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
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
