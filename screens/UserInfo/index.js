import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {colors, globalStyles} from '../../styles/globalStyles'
import {detailsStyle} from '../../styles/detailsStyle'
import {users} from '../../MockData/users'
import VectorDrawable from "@klarna/react-native-vector-drawable";
import VectorImage from "react-native-vector-image";
import {TouchableOpacity} from "react-native-gesture-handler";
import Button from "../../components/Button";
import Description from '../../components/Description';
import UserInformation from '../../components/UserInformation';


const UserInfo = ({ route, navigation }) => {

    let userId = route.params.userId;

    const [userInfo, setUserInfo] = useState('')


    useEffect(() => {
        setUserInfo(users.find((user) => user.id === userId));
    }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: userInfo.nick,
        });
    }, [navigation, userInfo.nick]);

    const goToChats = () => {
        navigation.navigate('ChatDetails', {
            chatId: userInfo.id,
            chatTitle: userInfo.nick,
            chatType: 'private',
            participants: '',
        })
    }


    return (
        <View style={globalStyles.container}>
            <UserInformation user={userInfo} withNick={false} />

            <View style={globalStyles.infoUserBottomContainer}>
                <Button onPress={goToChats}>
                    <VectorImage source={require('../../assets/Icons/messageFocused.svg')}/>
                </Button>
                <Button onPress={goToChats}>
                    <VectorImage source={require('../../assets/Icons/delete.svg')}/>
                </Button>
            </View>
        </View>
    )
}

export default UserInfo;