import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {chatList, chatMessages} from '../../MockData/messages'
import {colors, globalStyles} from '../../styles/globalStyles'
import Message from "../../components/Message";


const ChatDetails = ({ route }) => {
    const { chatTitle, chatId } = route.params;

    const getMessages = (chatId) => {
        console.log(chatId)
        return chatMessages.filter((chat) => chat.id === chatId);
    }

    const renderMessages = ({message}) => (
        <Message text={message.text} author={message.author} date={message.date} />
    );

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={getMessages(chatId)}
                renderItem={renderMessages}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default ChatDetails;