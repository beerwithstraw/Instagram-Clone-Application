import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ADIcon from 'react-native-vector-icons/AntDesign'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler'


const PostFooter = ({ likesCount: likesCountProp, caption, postedAt}) => {

    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const [likesCount, setLikesCount] = useState(0);


    const likePressed = () => {
        const total = (liked ? -1 : 1) 
        setLikesCount(likesCount + total )
        setLiked(!liked)
    }
    const savePressed = () => {
        setSaved(!saved) 
    }

    useEffect(() => {
        setLikesCount(likesCountProp)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.icons}>
                <View style={styles.leftIcons}>
                    <TouchableOpacity activeOpacity={0.5} onPress={likePressed}>
                        {liked ? (
                            <ADIcon name="heart" size={25} color="#e73838"/>

                        ) : (
                            <ADIcon name="hearto" size={25} color="#545454"/>
                        )}
                    </TouchableOpacity>

                    <FontistoIcon name="comment" size={25} color="#545454"/>
                    <IoniconsIcon name="paper-plane-outline" size={25} color="#545454"/>
                </View>
                <View style={styles.rightIcons}>
                <TouchableOpacity activeOpacity={0.5} onPress={savePressed}>
                        {saved ? (
                            <FAIcon name="bookmark" size={25} color="black"/>

                        ) : (
                            <FAIcon name="bookmark-o" size={25} color="#545454"/>
                        )}
                    </TouchableOpacity>

                </View>
            </View>



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
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    leftIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 110,
    },
    rightIcons: {
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
