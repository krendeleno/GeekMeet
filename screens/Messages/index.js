import React from 'react';
import {View, FlatList} from 'react-native';
import {globalStyles} from '../../styles/globalStyles'
import {chatList, groupChatList} from '../../MockData/messages'
import Chat from "../../components/Chat";
import VectorImage from "react-native-vector-image";
import styles from './styles'


const MessagesList = ({navigation}) => {
    const prepareLastMessage = (lastMessage) => {
        let preparedMessage = lastMessage.author === "you" ?
            lastMessage.text :
            lastMessage.author + ": " + lastMessage.text;

        const maxLength = 20;

        if (preparedMessage.length > maxLength)
            preparedMessage = preparedMessage.slice(0, maxLength) + '...';

        return preparedMessage;
    }

    const separator = ()=>{
        return <VectorImage
            source={require('../../assets/Icons/chatSeparator.svg')}
        />}

    const merge = (array1, array2) => {
        let result = [];
        let [left, right] = [0 , 0];

        array1 = array1.map(item => ({...item, type: "personal"}));
        array2 = array2.map(item => ({...item, type: "group"}));

        const getDate = (item) => { return item.lastMessage.date; }

        while (left < array1.length && right < array2.length) {
            if (getDate(array1[left]) > getDate(array2[right])) {
                result.push(array1[left]);
                left++;
            } else {
                result.push(array2[right]);
                right++;
            }
        }

        if (left < array1.length) {
            result = result.concat(array1.slice(left, array1.length));
        } else if (right < array2.length) {
            result = result.concat(array2.slice(right, array2.length))
        }

        return result
    }


    const renderChat = ({item}) => (
        <Chat title={item.title}
              image={item.image}
              lastMessage={prepareLastMessage(item.lastMessage)}
              onPress={() => {
                  navigation.navigate('ChatDetails', {
                      chatId: item.id,
                      chatTitle: item.title,
                      chatType: item.type,
                      participants: '',
                  });
              }}/>
    );

    return (
        <View style={globalStyles.container}>
            <FlatList
                ItemSeparatorComponent={separator}
                contentContainerStyle={{flexGrow: 0, paddingTop: '2.5%'}}
                style={styles.container}
                data={merge(chatList, groupChatList)}
                renderItem={renderChat}
                keyExtractor={(item) => item.id + item.type}
            />
        </View>
    )
}

export default MessagesList;