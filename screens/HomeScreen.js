import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import Stories from '../assets/components/Stories'
import Feed from '../assets/components/Feed'


const HomeScreen = ({ }) => {


    return (
        <SafeAreaView style={styles.container}>
            <Feed />


        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {},
})
