import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import ProfilePicture from './ProfilePicture'
const PostHeader = ({ imageUri, name }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <ProfilePicture uri={imageUri} size={30}/>
                <Text style={styles.text}>{name}</Text>
            </View>

            <View style={styles.right}>
                <Icon name="dots-three-vertical" size={20} />
            </View>

        </View>
    )
}

export default PostHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: -5
    },
    left: {
        flexDirection: 'row'
    },
    right: {
        marginRight: 10
    },
    text: {
        alignSelf: 'center',
        fontWeight: "600"
    }
})
