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
        setStatus("default");
        setModalVisible(!isModalVisible);
    };

    const onRequestIcon = ()=>{
        switch (eventRequestStatus) {
            case "edit":
                navigation.navigate('EventAdd', {
                    eventData: event,
                    isEdit: true
                });
                break;
            case "sent":
                setStatus("default");
                break;
            case "accepted":
                toggleModal()
                break;
            default:
                setStatus("sent");
                break;
        }


        // postApi(`/event/${eventId}/join`, context).then((data) => {});
    }

    // useEffect(() => {
    //     getApi(`/event/${eventId}`, context).then((data) => {});
    //     getApi(`/event/${eventId}/members`, context).then((data) => {});
    // }, [])

    const addToFavorites = () => {
        setMark(!markStatus);
        // postApi(`/event/${eventId}/favorites`, context).then((data) => {});
    }

    const renderRequestButton = (eventRequestStatus) =>{
        let image = "";
        let color = "";
        let text = "";
        let comment =""

        switch (eventRequestStatus) {
            case "edit":
                text = "Редактировать"
                image = require('../../assets/Icons/whiteCross.svg');
                color = colors.green;
                break;
            case "sent":
                text = "Отменить заявку"
                image = require('../../assets/Icons/whiteCross.svg');
                color = colors.violet;
                comment = "Ваша заявка еще не одобрена";
                break;
            case "accepted":
                text = "Отменить заявку"
                image = require('../../assets/Icons/whiteCheckMark.svg')
                color = colors.darkRed
                comment = "Ваша заявка одобрена"
                break;
            case "rejected":
                text = "Вас отклонили :с"
                image = require('../../assets/Icons/whiteCheckMark.svg')
                color = colors.grey
                break;
            default:
                text = "Подать заявку"
                image = require('../../assets/Icons/whitePlus.svg')
                color = colors.green;
                break;
        }

        return (<>
            <Button title={text} onPress={onRequestIcon} color={color} size={contentWidth.full} isTouchable={eventRequestStatus == "rejected"}>
            {
                    eventRequestStatus != "rejected"
                    &&
                <VectorImage style ={detailsStyle.btnImg} source={image}/>
            }
            </Button>
            <Text style={styles.underBtnText}>{comment!="" && comment}</Text>
            </>)
    }

    return (
        <ScrollView contentContainerStyle={detailsStyle.container}>
            <View style={detailsStyle.header}>
                <CloseHeader onPress={navigation.goBack} whiteColor={true}/>
                <Bookmark isMarked={markStatus} onPress={addToFavorites} style={detailsStyle.bookmark} whiteColor={true}/>
            </View>
            <View styles={detailsStyle.containerForInnerShadow}>
                <Image style={detailsStyle.img} source={{uri: image}} />
                <View style={detailsStyle.topInnerShadow}/>
                {/* <View style={detailsStyle.bottomInnerShadow}/> */}
            </View>
            <Text style={detailsStyle.title}>{title}</Text>
            <View style={detailsStyle.viewInfo}>
                <View>

                    <TagList tagList={tags} fromSearch={false} color={true}/>
                    <Seats style={detailsStyle.seats} available={participants} fromSearch={false}/>
                    <Text style={detailsStyle.dateTime}>{format(dateTime, 'd MMMM p', {locale: ru})}</Text>
                    <Text style={detailsStyle.place}>{place}</Text>
                    <Text style={detailsStyle.place}>{address}</Text>
                </View>

                <User style={detailsStyle.bigUserImage} userId={adminId} navigation={navigation}/>
            </View>
            <Description style={detailsStyle.description} description={description}/>
            <UsersList label="Участники" userList={members} navigation={navigation}/>
            {renderRequestButton(eventRequestStatus)}

            <ConfirmModal 
                yesFunc={modalConfirm} 
                toggleFunc={toggleModal} 
                text="Вы уверены, что хотите отменить заявку?" 
                isModalVisible={isModalVisible}
            />


        </ScrollView>
    )
}

export default EventDetails;