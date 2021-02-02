import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Stories from '../assets/components/Stories'
import Feed from '../assets/components/Feed'


const HomeScreen = ({ }) => {


    return (
        <View style={styles.container}>
            <Feed />


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {},
})
