import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Story from './Story'
import {FlatList} from 'react-native';


const data = [
    {
        imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        name: "Ujjawal",
    },{
        imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        name: "Pulkit",
    },{
        imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        name: "Aaryaman",
    },{
        imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        name: "Anurag",
    },{
        imageUri: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
        name: "Ashutosh",
    }
]
const Stories = () => {

    return (
        <FlatList 
            data={data}
            keyExtractor={({name}) => name}
            horizontal
            renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name}/>}
        />
    )
}

export default Stories

const styles = StyleSheet.create({})
