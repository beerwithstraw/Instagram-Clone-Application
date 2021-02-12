import React, { useState, useEffect } from 'react'
import { StyleSheet, FlatList } from 'react-native'
// import { API, graphqlOperation } from 'aws-amplify';
// import { listStorys } from '../../graphql/queries';

import storiesData from '../data/stories'
import Story from './UserStoryPreview'

const Stories = () => {

    // const [stories, setStories] = useState([]);

    // useEffect(() => {
    //   fetchStories();
    // }, []);
  
    // const fetchStories = async () => {
    //   try {
    //     const storiesData = await API.graphql(graphqlOperation(listStorys));
    //     setStories(storiesData.data.listStorys.items);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }

    return (
        <FlatList style={styles.container}
            data={storiesData}
            keyExtractor={({user: {id}}) => id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Story  story={item} />}
        />
    )
}

export default Stories

const styles = StyleSheet.create({
    container: {
        marginStart: 0,
    }
})
