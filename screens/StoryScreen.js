import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native'
import { StyleSheet, ActivityIndicator, ImageBackground, Image, Dimensions } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native'

import storiesData from '../assets/data/stories'
import {} from 'react-native';

const StoryScreen = () => {

    const [userStories, setUserStories] = useState  (null)
    const [activeStoryIndex, setActiveStoryIndex] = useState(null)
    const route = useRoute();


    useEffect(() => {
        const userId = route.params.userId;
        const userStories = storiesData.find(storyData => storyData.user.id == userId)

        setUserStories(userStories)
        setActiveStoryIndex(0)
    }, [])

    const handlePress = (e) => {
        const x = e.nativeEvent.locationX;
        const screenWidth = Dimensions.get("window").width;
        
        if (x < screenWidth/2) {
            handlePreviousStory()
        } else {
            handleNextStory()
        }
    }

    const handleNextStory = () => {
        if (activeStoryIndex >= userStories.stories.length) {
            return 
        }
        setActiveStoryIndex(activeStoryIndex + 1)
    }

    const handlePreviousStory = () => {
        if (activeStoryIndex <= 0) {
            return
        }
        setActiveStoryIndex(activeStoryIndex - 1)
    }

    if (!activeStory) {
        return (
            <SafeAreaView>
                <ActivityIndicator/>
            </SafeAreaView>
        )
    }


    const activeStory = userStories.stories[activeStoryIndex]


    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground source={{uri: activeStory.imageUri}} style={styles.image}></ImageBackground>
            </TouchableWithoutFeedback>


        </View>
    )
}

export default StoryScreen

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
})
