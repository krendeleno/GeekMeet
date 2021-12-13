import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import {chatMessages, groupChatMessages} from '../../MockData/messages'
import {colors, contentWidth, globalStyles} from '../../styles/globalStyles'
import Message from "../../components/Message";
import Input from "../../components/Input";
import VectorImage from "react-native-vector-image";
import {getApi, postApi} from "../../utils/api";
import {Context} from "../../components/Context";


const ChatDetails = ({route, navigation}) => {
    const {chatId, chatType} = route.params;
    const [context, setContext] = useContext(Context);

    const goToUserProfile = (id) => {
        navigation.navigate('UserInfo', {
            userId: id,
        })
    }

    // useEffect(() => {
    //     getApi(`/chats/${chatType}/${chatId}`, context).then((data) => {});
    // }, [])

    const [chatInfo, setChatInfo] = useState('')
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        postApi(`/chats/${chatType}`, context, {
            id: chatId,
            text: message
        }).then((data) => {});
    }

    const getMessages = (chatId, chatType) => {
        const messagesType = chatType === "private" ? chatMessages : groupChatMessages;

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
        <View style={[globalStyles.anotherContainer,{backgroundColor:"E5E5E5", paddingTop: '2.5%'}]}>
            <FlatList
                data={chatInfo.messages}
                renderItem={renderMessages}
                keyExtractor={(item) => item.id}
            />

            <View style={{flexDirection: 'row', width: '100%',justifyContent:'space-around', alignItems:'center', paddingBottom: '2.5%'}}>
                <Input onChange={({text}) => setMessage(text)} placeholder="Введите сообщение" name="message"
                       value={message}  color={colors.tagViolet} size={contentWidth.small} height={40} error={'false'} multiline/>
                <TouchableOpacity onPress={sendMessage}>
                    <VectorImage source={require('../../assets/Icons/send.svg')}/>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ChatDetails;