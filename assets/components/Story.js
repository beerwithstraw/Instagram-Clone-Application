import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

import ProfilePicture from './ProfilePicture'
import stories from '../data/stories'
const Story = (props) => {

    const { 
        story: {
            user: {
                id, imageUri, name,
            }
        }
    } = props

    const navigation = useNavigation()
    const toStory = () => {
        navigation.navigate("Story", { userId: id})
    }

    return (
        <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={toStory}>
            <ProfilePicture uri={imageUri}/>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Story

const styles = StyleSheet.create({
    container: {
    marginRight: -15,
    },
    name: {
      textAlign: 'center',
      marginTop: -10,
    }
})
