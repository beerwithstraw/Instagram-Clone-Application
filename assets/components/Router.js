import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StoryScreen from '../../screens/StoryScreen';

import BottomHomeNavigator from './BottomHomeNavigator'

const RootStack = createStackNavigator();
const Router = () => {
    return (
      <RootStack.Navigator>
        <RootStack.Screen 
        name={"Home"} 
        component={BottomHomeNavigator} 
        options={{
          headerShown: false,
        }}
        /> 

      <RootStack.Screen 
        name='Story' 
        component={StoryScreen} 
        options={{
          headerShown: false,
          footerShown: false
        }} 
      />
      </RootStack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})

