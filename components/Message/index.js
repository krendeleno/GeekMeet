import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {chatList, chatMessages} from '../../MockData/messages'
import {colors, globalStyles} from '../../styles/globalStyles'
import styles from "./styles";


const Message = ({ text, author, date }) => {

    return (
        <View style={ author === "you" ? styles.yourMessage : styles.message }>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
    )
}

export default Message;