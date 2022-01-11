import React, {useContext, useEffect, useState} from 'react';
import { View, Text, Image } from 'react-native';
import VectorImage from 'react-native-vector-image';

import Button from '../../components/Button'
import TagList from '../../components/TagList';
import Description from '../../components/Description';
import UsersList from '../../components/UsersList';
import ProfileEventList from '../../components/ProfileEventList';
import {Context} from "../../components/Context.js"
import ProfEventsSecondTab from '../../components/ProfEventsSecondTab';

import {colors, globalStyles, contentWidth} from '../../styles/globalStyles'
import styles from '../../styles/profileStyles'
import {detailsStyle} from '../../styles/detailsStyle'
import {users} from '../../MockData/users';
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios";
import {getApi} from "../../utils/api";
import IconButton from '../../components/IconButton';


const Profile = ({navigation}) => {
    const friendRequests = 6;
    const [context, setContext] = useContext(Context);

    const thisUser = users.find(item => item.id == context.userId);
    const [user, setUser] = useState(thisUser);

    useEffect(() => {
        getApi('/profile', context).then((data) => setUser(values => ({...values, nick: data.login, description: data.about})));
        getApi('/profile/friends', context).then((data) => {});
        getApi('/profile/events', context).then((data) => {});
    }, [])

    const eventAdd = () => {
        navigation.navigate('EventAdd', {
            isEdit: false
        })
    }
    const editUserData = () => {
        navigation.navigate('EditUserData', {
            userData: user})
    }
    const editUserAbout = () => {
        navigation.navigate('EditUserAbout', {
            userData: user})
    }

    return (
        
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.upperContainer}>
                <Image source={{uri: user.image}} style={detailsStyle.bigUserImage}/>
                <View style={styles.rightUpperContainer}>
                    <Text style={styles.nick}>{user.nick}</Text>
                    <TagList tagList={user.tags} fromSearch={false} color={false} screen="Profile"/>
                    <View style={styles.buttons}>
                        <IconButton 
                            source={require('../../assets/Icons/gear.svg')}
                            onPress={editUserData}
                            />
                        <IconButton 
                            source={require('../../assets/Icons/pencil.svg')}
                            onPress={editUserAbout}
                            />
                    </View>
                </View>
            </View>
            <Button 
                title="Добавить мероприятие" 
                color={ colors.violet }
                onPress={eventAdd}
                size={contentWidth.full}>
                <VectorImage 
                    style ={detailsStyle.btnImg} 
                    source={require('../../assets/Icons/whitePlus.svg')}/>
            </Button>
            <Description style={detailsStyle.description} description={user.description}/>
            <UsersList label="Друзья" userList={user.friends} requests={friendRequests} navigation={navigation}/>
            <ProfEventsSecondTab userId={context.userId} navigation={navigation}/>
    
            
        </ScrollView>
        
    )
}

export default Profile;