import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Feather from "react-native-vector-icons/Feather";
import IoniconsIcon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../../screens/HomeScreen';
import StoryScreen from '../../screens/StoryScreen'

import Logo from '../Instagram-Logo.png'
import IGBlack from '../IG-Black.png' 

const HomeStack = createStackNavigator(); 

const HomeRoutes = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
              name='Home'
              component={HomeScreen}
              options={{
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
              }}
            />
        </HomeStack.Navigator> 

    )
}

export default HomeRoutes

const styles = StyleSheet.create({})