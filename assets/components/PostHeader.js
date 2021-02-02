import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ProfilePicture from './ProfilePicture'
const PostHeader = ({ imageUri, name }) => {
    return (
        <View style={styles.container}>
            <ProfilePicture uri={imageUri} size={30}/>
            <Text style={styles.text}>{name}</Text>

        </View>
    )
}

export default PostHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        alignSelf: 'center',
        fontWeight: "600"
    }
})
