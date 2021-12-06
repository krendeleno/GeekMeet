import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {chatList, chatMessages} from '../../MockData/messages'
import {colors, globalStyles} from '../../styles/globalStyles'
import styles from "./styles";


const Message = ({ text, author, date }) => {

    return (
        <View style={ author === "you" ? styles.yourMessage : styles.message }>
            <Text>{text}</Text>
            <Text>{author}</Text>
            <Text>{date}</Text>
        </View>
    )
}

export default Message;