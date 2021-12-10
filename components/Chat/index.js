import React, {useState} from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import {colors, globalStyles} from '../../styles/globalStyles'
import chatStyles from '../../styles/chatStyles'


const Chat = ({ title, lastMessage, onPress, image }) => {


    return (
        <TouchableOpacity onPress={onPress} style={chatStyles.chat}>
            <Image source={image} style={globalStyles.tinyImg}/>
            <View>
                <Text>{title}</Text>
                <Text>{lastMessage}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Chat;