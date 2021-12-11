import React from 'react';
import { View, Text, Image } from 'react-native';
import VectorImage from 'react-native-vector-image';

import User from '../../components/User'
import Button from '../../components/Button'
import TagList from '../../components/TagList';
import Description from '../../components/Description';
import UsersList from '../../components/UsersList';
import ProfileEventList from '../../components/ProfileEventList';

import {colors} from '../../styles/globalStyles'
import styles from '../../styles/profileStyles'
import {detailsStyle} from '../../styles/detailsStyle'
import {users} from '../../MockData/users';


const Profile = ({navigation}) => {
    const mockId = 3;
    const friendRequests = 6;
    const user = users.find(item => item.id === mockId);

    const eventAdd = () => {
        navigation.navigate('EventAdd')
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.upperContainer}>
                <Image source={{uri: user.image}} style={detailsStyle.bigUserImage}/>
                <View style={styles.rightUpperContainer}>
                    <Text style={styles.nick}>{user.nick}</Text>
                    <TagList tagList={user.tags} fromSearch={false}/>
                </View>
            </View>
            <Button 
                title="Добавить мероприятие" 
                color={ colors.violet }
                onPress={eventAdd}>
                <VectorImage 
                    style ={detailsStyle.btnImg} 
                    source={require('../../assets/Icons/whitePlus.svg')}/>
            </Button>
            <Description style={detailsStyle.description} description={user.description}/>
            <UsersList label="Друзья" userList={user.friends} requests={friendRequests} navigation={navigation}/>
        </View>
        <ProfileEventList navigation={navigation}/>
        </>
    )
}

export default Profile;