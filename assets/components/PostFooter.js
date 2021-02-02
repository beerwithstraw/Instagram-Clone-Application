import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const PostFooter = ({ likesCount, caption, postedAt}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.likes}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>

        </View>
    )
}

export default PostFooter

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    likes: {
        fontWeight: "600",
        margin: 2.5,
    },
    caption: {
        margin: 2.5,

    },
    postedAt: {
        color: "#8c8c8c",
        margin: 2.5,

    },
})
