import React from 'react'
import { Text } from 'react-native';
import VectorImage from 'react-native-vector-image';
import { detailsStyle } from '../../styles/detailsStyle';
import { colors, contentWidth } from '../../styles/globalStyles';
import Button from '../Button';
import styles from './styles'

const EventDetailsBtn = ({eventRequestStatus, setStatus, navigation, toggleFunc, eventData }) => {
    let image = "";
    let color = "";
    let text = "";
    let comment =""


    const onRequestIcon = ()=>{
        switch (eventRequestStatus) {
            case "edit":
                navigation.navigate('EventAdd', {
                    eventData: eventData,
                    isEdit: true
                });
                break;
            case "sent":
                setStatus("default");
                break;
            case "accepted":
                toggleFunc()
                break;
            default:
                setStatus("sent");
                break;
        }


        // postApi(`/event/${eventId}/join`, context).then((data) => {});
    }

    switch (eventRequestStatus) {
        case "edit":
            text = "Редактировать"
            image = require('../../assets/Icons/whitePencil.svg');
            color = colors.violet;
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
            color = "#C7C7C7"
            break;
        default:
            text = "Подать заявку"
            image = require('../../assets/Icons/whitePlus.svg')
            color = colors.green;
            break;
    }

    return (
        <>
            <Button title={text} onPress={onRequestIcon} color={color} size={contentWidth.full} isTouchable={eventRequestStatus == "rejected"}>
            {
                    eventRequestStatus != "rejected"
                    &&
                <VectorImage style ={detailsStyle.btnImg} source={image}/>
            }
            </Button>
            <Text style={styles.underBtnText}>{comment!="" && comment}</Text>
        </>
    )
}

export default EventDetailsBtn
