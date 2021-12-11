import React from 'react';
import Button from "../Button";
import VectorImage from "react-native-vector-image";
import {View, Text, TouchableOpacity} from 'react-native';
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import DatePicker from "react-native-date-picker";


const CustomDatePicker = ({ dateTime, formatType, type, title, open, setOpen, changeDateTime }) => {

    const getOpen = () => {
        if (type === "date")
            return open.date;
        else
            return open.time;
    }

    return (
        <View>
            <Text>{title}</Text>
            <TouchableOpacity onPress={() => setOpen(values => ({...values, [type]: true}))}>
                <Text>{format(dateTime, formatType, {locale: ru})}</Text>
            </TouchableOpacity>

            <DatePicker
                modal
                mode={type}
                open={getOpen()}
                locale={"ru"}
                minimumDate={new Date()}
                date={dateTime}
                onConfirm={(date) => {
                    setOpen({date: false, time: false})
                    changeDateTime(date, type)
                }}
                onCancel={() => {
                    setOpen({date: false, time: false})
                }}
            />
        </View>
    )
}

export default CustomDatePicker;