import React, {useState} from 'react';
import {View} from 'react-native';
import {globalStyles, colors} from '../../styles/globalStyles'
import Button from "../../components/Button";
import Input from "../../components/Input";
import ParticipantsChanger from '../../components/ParticipantsChanger'
import CustomDatePicker from "../../components/CustomDatePicker";

const AddEventInfo = ({navigation, onChange, eventData, setEventData}) => {
    const onPressNext = () => {
        navigation.navigate('EventAddCover')
    }

    const changeDateTime = (dateTime, type) => {

        if (type === 'date') {

            let [year, month, day] = [dateTime.getFullYear(), dateTime.getMonth(), dateTime.getDate()]
            let currentDate = new Date(eventData.dateTime.getTime());
            currentDate.setFullYear(year, month, day)
            setEventData(values => ({...values, dateTime: currentDate}));
        } else {
            let [hours, minutes] = [dateTime.getHours(), dateTime.getMinutes()]
            let currentDate = new Date(eventData.dateTime.getTime());
            currentDate.setHours(hours, minutes, 0, 0)
            setEventData(values => ({...values, dateTime: currentDate}));
        }
    }


    const [open, setOpen] = useState({
        date: false,
        time: false
    })

    return (
        <View style={globalStyles.container}>
            <Input onChange={onChange} placeholder="Название мероприятия" name="title" value={eventData.title}/>
            <View style={{flexDirection: 'row'}}>
                <CustomDatePicker
                    title="Дата"
                    formatType='d/L/yy'
                    type="date"
                    open={open}
                    setOpen={setOpen}
                    dateTime={eventData.dateTime}
                    changeDateTime={changeDateTime}
                />
                <CustomDatePicker
                    title="Время"
                    formatType='p'
                    type="time"
                    open={open}
                    setOpen={setOpen}
                    dateTime={eventData.dateTime}
                    changeDateTime={changeDateTime}
                />
            </View>



            <ParticipantsChanger
                participants={eventData.participants}
                onPlus={() => setEventData(values => ({...values, participants: eventData.participants + 1}))}
                onMinus={() => setEventData(values => ({...values, participants: eventData.participants - 1}))}
            />

            <Input onChange={onChange} placeholder="Место или заведение" name="place" value={eventData.place}/>
            <View style={{flexDirection: 'row'}}>
                <Input onChange={onChange} placeholder="Улица" name="street" value={eventData.street}/>
                <Input onChange={onChange} placeholder="Дом" name="house" value={eventData.house}/>
            </View>
            <Input onChange={onChange} placeholder="Метро" name="metro" value={eventData.metro}/>
            <Input onChange={onChange} placeholder="Описание мероприятия" name="description"
                   value={eventData.description}/>
            <Button title="Далее" color={colors.green} onPress={onPressNext}/>
        </View>
    )
}

export default AddEventInfo;