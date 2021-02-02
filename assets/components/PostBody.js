import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'

const PostBody = ({ imageUri }) => {
    return (
        <View>
            <Image style={styles.image} source={{uri: imageUri}} />
        </View>
    )
}

export default PostBody

const styles = StyleSheet.create({
    image: {
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },  
})
