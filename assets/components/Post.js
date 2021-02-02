import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
import { ScrollView } from 'react-native'

const Post = ({ post }) => {
    return (
        <ScrollView>
            <PostHeader imageUri={post.user.imageUri} name={post.user.name}/>
            <PostBody imageUri={post.imageUri}/>
            <PostFooter likesCount={post.likesCount} caption={post.caption} postedAt={post.postedAt}/>
        </ScrollView>
    )
}

export default Post

const styles = StyleSheet.create({})
