import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify'

import Post from './Post'
import Stories from './UserStoriesPreview';
import { listPosts } from '../graphQL/queries'

const Feed = () => {

    const [posts, setPosts] = useState([])
 
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try{
            const postsData = await API.graphql(graphqlOperation(listPosts))
            console.log(postsData)
            setPosts(postsData.data.listPosts.items)
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <FlatList 
            data={posts}
            ListHeaderComponent={Stories}
            keyExtractor={({ id }) => id}
            renderItem={({item}) => <Post post={item} />}
        />
    )
}

export default Feed

const styles = StyleSheet.create({})
