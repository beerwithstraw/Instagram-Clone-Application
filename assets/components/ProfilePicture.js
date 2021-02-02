import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProfilePicture = ({ uri, size = 70 }) => {
    return (
        <View style={[styles.container, {height: size + 6, width: size + 6 }]}>
            <Image style={[styles.image, {height: size, width: size }]} 
                source={{uri}}/>
        </View>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 50,
        borderWidth: 2.5,
        borderColor: "#b8357e"

    },
    image: {
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: "#fff"
    }
})
