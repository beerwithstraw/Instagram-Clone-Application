import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import storiesData from '../data/stories'
import Story from './Story'
import {FlatList} from 'react-native';

const Stories = () => {

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
