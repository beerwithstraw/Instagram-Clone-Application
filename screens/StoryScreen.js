import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native';
import { View, SafeAreaView ,StyleSheet, ActivityIndicator, ImageBackground, Dimensions, TouchableWithoutFeedback, Text, TextInput } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import ProfilePicture from '../assets/components/ProfilePicture'
import storiesData from '../assets/data/stories'

const StoryScreen = () => {

    const [userStories, setUserStories] = useState(null)
    const [activeStoryIndex, setActiveStoryIndex] = useState(null)

    const route = useRoute();
    const navigation = useNavigation();
    const userId = route.params.userId;


    useEffect(() => {
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

    const navigateToNextUser = () => {
        navigation.push("Story", { userId: (parseInt(userId) + 1).toString()})
    }

    const navigateToPreviousUser = () => {
        navigation.push("Story", { userId: (parseInt(userId) - 1).toString()})

    }

    const handleNextStory = () => {
        if (activeStoryIndex >= userStories.stories.length - 1) {
            navigateToNextUser()
            return 
        }
        setActiveStoryIndex(activeStoryIndex + 1) 
    }

    const handlePreviousStory = () => {
        if (activeStoryIndex <= 0) {
            navigateToPreviousUser()
            return
        }
        setActiveStoryIndex(activeStoryIndex - 1)
    }

    if (!userStories) {
        return (
            <SafeAreaView>
                <ActivityIndicator/>
            </SafeAreaView>
        )
    }


    const activeStory = userStories.stories[activeStoryIndex]

    console.log(userStories)
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground source={{uri: activeStory.imageUri}} style={styles.image}>
                    <View style={styles.userInfo}>
                        <ProfilePicture uri={userStories.user.imageUri} size={40}/>
                        <Text style={styles.userName}>{userStories.user.name}</Text>
                        
                        <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.cameraButton}>
                            <Feather name="camera" size={25} color={'white'}  />
                        </View>
                        <KeyboardAvoidingView style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                editable
                                placeholder="Send message"
                                placeholderTextColor={"white"}
                            />
                        </KeyboardAvoidingView>
                        <View style={styles.messageButton}>
                            <Ionicons name="paper-plane-outline" size={30} color={"white"}/>
                        </View>
                    </View>

                </ImageBackground>
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
        justifyContent: 'space-between',
    },

    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    userName: {
        color: "black",
        fontWeight: "600",
        fontSize: 18
    },
    postedTime: {
      marginLeft: 10,
      fontWeight: "700",
      color: "white",
      fontSize: 16
    },
    bottomContainer: {
      flexDirection: "row",
      marginBottom: 20,
      marginHorizontal: 10
    },
    cameraButton: {
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 50,
    },
    messageButton: {
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "gray"
    },
    textInput: {
      height: "100%",
      color: "white",
      fontSize: 16
    },
    textInputContainer: {
      flex: 1,
      borderWidth: 1,
      borderColor: 'gray',
      marginHorizontal: 10,
      paddingHorizontal: 10,
      borderRadius: 50,
      height: 40
    }
})
