import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ProfilePicture = ({ uri }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} 
                source={{uri}}/>
        </View>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    container: {
        height: 76,
        width: 76,
        margin: 10,
        borderRadius: 50,
        borderWidth: 2.5,
        borderColor: "#b8357e"

    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: "#fff"
    }
})
