import React from 'react';
import Button from "../Button";
import VectorImage from "react-native-vector-image";
import {View, Text} from 'react-native';


const ParticipantsChanger = ({ onPlus, onMinus, participants }) => {

    return (
        <View style={{flexDirection: 'row'}}>
            <Text> Участники </Text>
            <Button onPress={onMinus}>
                <VectorImage source={require('../../assets/Icons/lightGreenMinus.svg')}/>
            </Button>
            <Text>{participants}</Text>
            <Button onPress={onPlus}>
                <VectorImage source={require('../../assets/Icons/lightGreenPlus.svg')}/>
            </Button>
        </View>



    )
}

export default ParticipantsChanger;