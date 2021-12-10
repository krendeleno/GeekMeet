import React from 'react';
import { View, Text } from 'react-native';
import VectorImage from 'react-native-vector-image';

import User from '../../components/User'
import Button from '../../components/Button'
import TagList from '../../components/TagList';
import EventDiscription from '../../components/EventDiscription';
import UsersList from '../../components/UsersList';
import ProfileEventList from '../../components/ProfileEventList';

import { colors } from '../../styles/globalStyles'
import styles from '../../styles/profileStyles'
import { detailsStyle } from '../../styles/detailsStyle'
import { users } from '../../MockData/users';



const Profile = ({navigation}) => {
    const mockId = 3;
    const friendRequests = 42;
    const user = users.find(item => item.id === mockId);


    return (
        <>
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <User userId={user.id} style={detailsStyle.bigUserImage} navigation={navigation}/>
                <View style={styles.rightUpperContainer}>
                    <Text style={styles.nick}>{user.nick}</Text>
                    <TagList tagList={user.tags} fromSearch={false}/>
                </View>
            </View>
            <Button 
                title="Добавить мероприятие" 
                color={ colors.violet }>
                <VectorImage 
                    style ={detailsStyle.btnImg} 
                    source={require('../../assets/Icons/whitePlus.svg')}/>
            </Button>
            <EventDiscription style={detailsStyle.discription} discription={user.discription}/>
            <UsersList label="Друзья" userList={user.friends} requests={friendRequests} navigation={navigation}/>
        </View>
        <ProfileEventList navigation={navigation}/>
        </>
    )
}

export default Profile;