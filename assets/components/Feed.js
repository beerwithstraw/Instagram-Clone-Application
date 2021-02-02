import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {FlatList} from 'react-native';

import Post from './Post'
import Stories from './Stories';

const data = [
    {
    user: {
        imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        name: "Elon",
    },
    imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
    caption: "#TheRichestMan LMAO",
    likesCount: 1234,
    postedAt: "6 minutes  ago"
    },
    {
        user: {
            imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
            name: "Elon",
        },
        imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        caption: "#TheRichestMan LMAO",
        likesCount: 1234,
        postedAt: "6 minutes ago"
    },
    {
        user: {
            imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
            name: "Elon",
        },
        imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        caption: "#TheRichestMan LMAO",
        likesCount: 1234,
        postedAt: "6 minutes ago"
    }
]
const Feed = () => {
    return (
        <FlatList 
            data={data}
            ListHeaderComponent={Stories}
            renderItem={({item}) => <Post post={item} />}
        />
    )
}

export default Feed

const styles = StyleSheet.create({})