import React from 'react';
import { View, Text, Image } from 'react-native';
import VectorImage from 'react-native-vector-image';

import Button from '../../components/Button'
import TagList from '../../components/TagList';
import Description from '../../components/Description';
import UsersList from '../../components/UsersList';
import ProfileEventList from '../../components/ProfileEventList';

import ProfEventsSecondTab from '../../components/ProfEventsSecondTab';

import {colors, globalStyles, contentWidth} from '../../styles/globalStyles'
import styles from '../../styles/profileStyles'
import {detailsStyle} from '../../styles/detailsStyle'
import {users} from '../../MockData/users';
import { ScrollView } from 'react-native-gesture-handler';


const Profile = ({navigation}) => {
    const mockId = 3;
    const friendRequests = 6;
    const user = users.find(item => item.id === mockId);

    const eventAdd = () => {
        navigation.navigate('EventAdd')
    }

    return (
        
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.upperContainer}>
                <Image source={{uri: user.image}} style={detailsStyle.bigUserImage}/>
                <View style={styles.rightUpperContainer}>
                    <Text style={styles.nick}>{user.nick}</Text>
                    <TagList tagList={user.tags} fromSearch={false} color={false}/>
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
            <ProfEventsSecondTab navigation={navigation}/>
        
        {/* <ProfileEventList navigation={navigation}/> */}
            
        </ScrollView>
        
    )
}

export default Profile;