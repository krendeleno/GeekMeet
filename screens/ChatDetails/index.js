import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {chatMessages, groupChatMessages} from '../../MockData/messages'
import {colors, globalStyles} from '../../styles/globalStyles'
import Message from "../../components/Message";
import Input from "../../components/Input";
import VectorImage from "react-native-vector-image";


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

            <View style={{flexDirection: 'row'}}>
                <Input onChange={({text}) => setMessage(text)} placeholder="Введите сообщение" name="message"
                       value={message} multiline/>
                       <TouchableOpacity>
                           <VectorImage source={require('../../assets/Icons/send.svg')}/>
                       </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChatDetails;