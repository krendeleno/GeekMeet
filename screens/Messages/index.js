import React from 'react';
import {View, FlatList} from 'react-native';
import {globalStyles} from '../../styles/globalStyles'
import {chatList} from '../../MockData/messages'
import Chat from "../../components/Chat";


const MessagesList = ({navigation}) => {
    const prepareLastMessage = (lastMessage) => {
        return lastMessage.author === "you" ? lastMessage.text : lastMessage.author + ": " + lastMessage.text;
    }



    const renderChat = ({item}) => (
        <Chat title={item.title}
              lastMessage={prepareLastMessage(item.lastMessage)}
              onPress={() => {
                  navigation.navigate('ChatDetails', {
                      chatId: item.id,
                      chatTitle: item.title,
                  });
              }}/>
    );

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={chatList}
                renderItem={renderChat}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default MessagesList;