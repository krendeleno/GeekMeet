import React from 'react';
import {View, Text, Image} from 'react-native';
import VectorImage from "react-native-vector-image";
import {TouchableOpacity} from "react-native";
import styles from "./styles";


const BackHeader = ({color, onPress}) => {

    return (
            <TouchableOpacity onPress={onPress}>
                <VectorImage source={color === "violet" ? require('../../assets/Icons/backViolet.svg') :
                    require('../../assets/Icons/backGreen.svg')}/>
            </TouchableOpacity>
    )
}

export default BackHeader;