import React, {useState} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import {colors, globalStyles} from '../../styles/globalStyles'


const Chat = ({ title, lastMessage, onPress }) => {


    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{title}</Text>
            <Text>{lastMessage}</Text>
        </TouchableOpacity>
    )
}

export default Chat;