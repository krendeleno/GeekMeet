import React, {useState} from 'react';
import {View} from 'react-native';
import {globalStyles, colors, contentWidth} from '../../styles/globalStyles'
import Button from "../../components/Button";
import Input from "../../components/Input";
import ParticipantsChanger from '../../components/ParticipantsChanger'
import CustomDatePicker from "../../components/CustomDatePicker";
import {validateDescription} from "../../utils/validate";
import { ScrollView } from 'react-native-gesture-handler';

const AddEventInfo = ({navigation, onChange, eventData, setEventData}) => {
    const [isValid, setIsValid] = useState({
        title: true,
        place: true,
        description: true,
        firstEntry: false,
    });

    const errorMessages = {
        title: 'Поле не может быть пустым',
        place: 'Поле не может быть пустым',
        description: !eventData.description ? 'Поле не может быть пустым' : 'Описание должно состоять хотя бы из 3х слов',
    }

    const onValidation = (event) => {
        setIsValid(values => ({...values, firstEntry: true}))
        const {name, text} = event;
        switch (name) {
            case "title":
                setIsValid(values => ({...values, title: !!text}))
                break;
            case "place":
                setIsValid(values => ({...values, place: !!text}))
                break;
            case "description":
                setIsValid(values => ({...values, description: !!text && validateDescription(text)}))
                break;
        }
    }

    const onChangeValidate = (event) => {
        onChange(event);
        onValidation(event);
    }

    const onPressNext = () => {
        if (!isValid.firstEntry) {
            setIsValid({
                title: false,
                place: false,
                description: false,
                firstEntry: false,
            })
        }
        if (Object.values(isValid).every(item => item))
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
        <ScrollView contentContainerStyle={globalStyles.container}>
            <Input onChange={onChangeValidate} placeholder="Название мероприятия" name="title" value={eventData.title}
                   error={isValid.title} errorMessage={errorMessages.title} color={colors.lightViolet} size={contentWidth.large} height={50}/>
            <View style={{flexDirection: 'row', width:contentWidth.medium, justifyContent:"center", paddingHorizontal:60}}>
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
                onMinus={() => setEventData(values => ({
                    ...values,
                    participants: Math.max(eventData.participants - 1, 2)
                }))}
            />

            <Input onChange={onChangeValidate} placeholder="Место или заведение" name="place" value={eventData.place}
                   error={isValid.place} errorMessage={errorMessages.place} color={colors.lightViolet} size={contentWidth.large} height={50}/>
            <View style={{flexDirection: 'row', width: contentWidth.large, justifyContent:"space-between"}}>
                <Input onChange={onChange} placeholder="Улица" name="street" value={eventData.street} color={colors.lightViolet} height={50} error={'false'} size={contentWidth.one}/>
                <Input onChange={onChange} placeholder="Дом" name="house" value={eventData.house} color={colors.lightViolet} height={50} error={'false'} size={contentWidth.third}/>
            </View>
            <Input onChange={onChange} placeholder="Метро" name="metro" value={eventData.metro} color={colors.lightViolet} size={contentWidth.large} height={50} error={'false'}/>
            <Input onChange={onChangeValidate} placeholder="Описание мероприятия" name="description"
                   value={eventData.description} error={isValid.description} errorMessage={errorMessages.description} size={contentWidth.large} color={colors.lightViolet}
                   height={150}/>
            <Button title="Далее" color={colors.green} onPress={onPressNext} size={contentWidth.small}/>
        </ScrollView>
    )
}

export default AddEventInfo;