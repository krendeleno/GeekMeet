import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {chatMessages} from '../../MockData/messages'
import {colors, globalStyles} from '../../styles/globalStyles'
import Message from "../../components/Message";


const ChatDetails = ({ route }) => {
    const { chatTitle, chatId } = route.params;

    const getMessages = (chatId) => {
        const messagesList = chatMessages.find((chat) => chat.id === chatId);
        return messagesList.messages;
    }

    const renderMessages = ({item}) => (
        <Message text={item.text} author={item.author} date={item.date} />
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