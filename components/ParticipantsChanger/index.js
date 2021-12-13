import React from 'react';
import Button from "../Button";
import VectorImage from "react-native-vector-image";
import {View, Text} from 'react-native';
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler';




const ParticipantsChanger = ({ onPlus, onMinus, participants }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Участники </Text>
            <TouchableOpacity onPress={onMinus}>
                <VectorImage source={require('../../assets/Icons/lightGreenMinus.svg')} style={styles.img}/>
            </TouchableOpacity>
            <Text style={styles.num}>{participants}</Text>
            <TouchableOpacity onPress={onPlus}>
                <VectorImage source={require('../../assets/Icons/lightGreenPlus.svg')} style={styles.img}/>
            </TouchableOpacity>
        </View>



    )
}

export default ParticipantsChanger;