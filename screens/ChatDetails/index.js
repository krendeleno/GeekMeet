import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {chatMessages, groupChatMessages} from '../../MockData/messages'
import {colors, globalStyles} from '../../styles/globalStyles'
import Message from "../../components/Message";
import Input from "../../components/Input";


const ChatDetails = ({route, navigation}) => {
    const {chatId, chatType} = route.params;

    const goToUserProfile = (id) => {
        navigation.navigate('UserInfo', {
            userId: id,
        })
    }

    const [chatInfo, setChatInfo] = useState('')
    const [message, setMessage] = useState('');


    const getMessages = (chatId, chatType) => {
        const messagesType = chatType === "personal" ? chatMessages : groupChatMessages;

        setChatInfo(messagesType.find((chat) => chat.id === chatId));
    }

    const renderMessages = ({item}) => (
        <Message text={item.text} author={item.author} date={item.date}
                 image={item.image} goToUserProfile={() => goToUserProfile(item.authorId)}
                 />
    );

    useEffect(() => {
        getMessages(chatId, chatType);
    }, [])

    useLayoutEffect(() => {
        navigation.setParams({
            participants: chatInfo.participants || '',
            image: chatInfo.image
        });
    }, [navigation, chatInfo.participants, chatInfo.image])

    return (
        <View style={globalStyles.anotherContainer}>
            <FlatList
                data={chatInfo.messages}
                renderItem={renderMessages}
                keyExtractor={(item) => item.id}
            />

            <Input onChange={({text}) => setMessage(text)} placeholder="Введите сообщение" name="message"
                   value={message} multiline/>
        </View>
    )
}

export default ChatDetails;