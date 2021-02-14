import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import { ScrollView } from 'react-native'

const Post = ({ post }) => {
    return (
        <ScrollView>
            <PostHeader imageUri={post.user.image} name={post.user.name}/>
            <PostBody imageUri={post.image}/>
            <PostFooter likesCount={post.likes} caption={post.caption} postedAt={post.createdAt}/>
        </ScrollView>
    )
}

export default Post

const styles = StyleSheet.create({})
