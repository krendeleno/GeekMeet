import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { useState } from 'react/cjs/react.development'

import EventDiscription from '../../components/EventDiscription';
import TagList from '../../components/TagList';
import Seats from '../../components/Seats';
import UsersList from '../../components/UsersList';
import Button from '../../components/Button';
import User from '../../components/User';

import {events} from '../../MockData/events'
import {styles} from './styles'
import Bookmark from '../../components/EventRequestIcon/Bookmark';
import ButtonIcon from '../../components/ButtonImage';



const EventDetails = ({ route, navigation }) => {

    const { eventId } = route.params;
    const event = events.find(item => item.id === eventId)
    const {image, title, tags, participants, date, place, adminId, discription, members, isMarked, requestStatus} = event

    const [markStatus, setMark] = useState(isMarked);
    const [eventRequestStatus, setStatus] = useState(requestStatus);

    const onRequestIcon = ()=>{
        if (eventRequestStatus == "sent"){
            setStatus("default");
        } else if (eventRequestStatus == "default"){
            setStatus("sent");
        }
    }

    const renderRequestButton = (eventRequestStatus) =>{
        if (eventRequestStatus == "sent"){
            return <Button title="Отменить заявку" onPress={onRequestIcon} image={"cross"} color={"red"}><ButtonIcon imageimage={"cross"}/></Button>
        } else if (eventRequestStatus == "default"){
            return <Button title="Подать заявку" onPress={onRequestIcon} image={"plus"} color={"green"}><ButtonIcon imageimage={"plus"}/></Button>
        } else {
            return <Button title="Заявка уже принята" image={"checkMark"} color={"purple"}><ButtonIcon imageimage={"checkMark"}/></Button>
        }
    }

    return (
        <ScrollView>
            <Image style={styles.img} source={{uri: image}} />
            <Bookmark isMarked={markStatus} onPress={()=>{
                    setMark(!markStatus)}}/>
            <View style={{flexDirection:"row"}}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <TagList tagList={tags}/>
                    <Seats style={styles.seats} available={participants}/>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.place}>{place}</Text>
                </View>
                
                <User style={styles.bigUserImage} userId={adminId}/>
            </View>
            <EventDiscription style={styles.discription} discription={discription}/>
            <UsersList label="Участники" userList={members}/>
            {renderRequestButton(eventRequestStatus)}
        </ScrollView>
    )
}

export default EventDetails;