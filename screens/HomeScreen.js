import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Stories from '../assets/components/Stories'


const HomeScreen = ({ }) => {
    return (
        <View style={styles.container}>
            <Stories />
            <Text>Hello World</Text>


        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
