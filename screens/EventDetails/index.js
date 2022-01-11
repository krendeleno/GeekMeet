import React, {useContext, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { useState } from 'react/cjs/react.development'
import VectorImage from 'react-native-vector-image';

import Description from '../../components/Description';
import TagList from '../../components/TagList';
import Seats from '../../components/Seats';
import UsersList from '../../components/UsersList';
import Button from '../../components/Button';
import User from '../../components/User';

import {events} from '../../MockData/events'
import {detailsStyle} from '../../styles/detailsStyle'
import Bookmark from '../../components/EventRequestIcon/Bookmark';
import CloseHeader from "../../components/CloseHeader";
import styles from "../../components/EventInfo/styles";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {getApi, postApi} from "../../utils/api";
import {Context} from "../../components/Context";
import { colors, contentWidth } from '../../styles/globalStyles';
import ConfirmModal from '../../components/ConfirmModal';
import DeleteIcon from '../../components/DeleteIcon';
import EventDetailsBtn from '../../components/EventDetailsBtn';




const EventDetails = ({ route, navigation }) => {
    const [context, setContext] = useContext(Context);
    const { eventId } = route.params;
    const event = events.find(item => item.id === eventId)
    const {image, title, tags, participants, dateTime, place, adminId, description, members, isMarked, requestStatus,address} = event

    const [markStatus, setMark] = useState(isMarked);
    const [eventRequestStatus, setStatus] = useState(requestStatus);


    useEffect(() => {
        if (adminId === context.userId)
            setStatus("edit");
    }, [])


    console.log(adminId);
    console.log(context.userId)

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    const modalConfirm = () => {
        if (eventRequestStatus != "edit" ){
            setStatus("default")  
        } else {
            deleteEvent()
        }

        setModalVisible(!isModalVisible);
    };


    // useEffect(() => {
    //     getApi(`/event/${eventId}`, context).then((data) => {});
    //     getApi(`/event/${eventId}/members`, context).then((data) => {});
    // }, [])

    const addToFavorites = () => {
        setMark(!markStatus);
        // postApi(`/event/${eventId}/favorites`, context).then((data) => {});
    }

    const deleteEvent = () => {
        console.log("удалим-ка ивент отсюда");
    }

    

    return (
        <ScrollView contentContainerStyle={detailsStyle.container}>
            <View style={detailsStyle.header}>
                <CloseHeader onPress={navigation.goBack} whiteColor={true}/>
                {
                    eventRequestStatus == "edit" 
                        ?
                    <DeleteIcon onPress={toggleModal}/> 
                        :
                    <Bookmark isMarked={markStatus} onPress={addToFavorites} style={detailsStyle.bookmark} whiteColor={true}/>
                }
                
            </View>

            <View styles={detailsStyle.containerForInnerShadow}>
                <Image style={detailsStyle.img} source={{uri: image}} />
                <View style={detailsStyle.topInnerShadow}/>
            </View>

            <Text style={detailsStyle.title}>{title}</Text>

            <View style={detailsStyle.viewInfo}>
                <View>

                    <TagList tagList={tags} fromSearch={false} color={true} screen="EventDetails"/>
                    <Seats style={detailsStyle.seats} available={participants} fromSearch={false}/>
                    <Text style={detailsStyle.dateTime}>{format(dateTime, 'd MMMM p', {locale: ru})}</Text>
                    <Text style={detailsStyle.place}>{place}</Text>
                    <Text style={detailsStyle.place}>{address}</Text>
                </View>

                <User style={detailsStyle.bigUserImage} userId={adminId} navigation={navigation}/>
            </View>

            <Description style={detailsStyle.description} description={description}/>
            <UsersList label="Участники" userList={members} navigation={navigation}/>
            
            <EventDetailsBtn toggleFunc={toggleModal} eventRequestStatus={eventRequestStatus} setStatus={setStatus} navigation={navigation} event={event}/>

            <ConfirmModal 
                yesFunc={modalConfirm} 
                toggleFunc={toggleModal}
                text={ eventRequestStatus == "edit" ? "Вы уверены, что хотите удалить событие?" 
                : "Вы уверены, что хотите отменить заявку?" }
                isModalVisible={isModalVisible}
            />



        </ScrollView>
    )
}

export default EventDetails;