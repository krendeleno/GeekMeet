import React, {useEffect, useState} from 'react';
import {View,  FlatList} from 'react-native';
import {chatMessages, groupChatMessages} from '../../MockData/messages'
import {colors, globalStyles} from '../../styles/globalStyles'
import Message from "../../components/Message";
import Input from "../../components/Input";


const ChatDetails = ({ route, navigation }) => {
    const { chatId, chatType } = route.params;
    let participants = '';
    let image;

    const [message, setMessage] = useState('');


    const getMessages = (chatId, chatType) => {
        const messagesType = chatType === "personal" ? chatMessages : groupChatMessages;

        const chatInfo = messagesType.find((chat) => chat.id === chatId);
        participants = chatInfo.participants;
        image = chatInfo.image;
        return chatInfo.messages;
    }

    const renderMessages = ({item}) => (
        <Message text={item.text} author={item.author} date={item.date} image={item.image}/>
    );

    useEffect(() => {
        navigation.setParams({
            participants: participants || '',
            image: image
        });
    }, [participants])

    return (
        <View style={globalStyles.anotherContainer}>
            <FlatList
                data={getMessages(chatId, chatType)}
                renderItem={renderMessages}
                keyExtractor={(item) => item.id}
            />

            <Input onChange={({text}) => setMessage(text)} placeholder="Введите сообщение" name="message" value={message} multiline/>
        </View>
    )
}

export default ChatDetails;