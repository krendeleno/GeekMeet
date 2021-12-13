import React from 'react';
import styles from "./styles";
import Button from "../Button";
import VectorImage from "react-native-vector-image";
import { TouchableOpacity } from 'react-native-gesture-handler';



const CloseHeader = ({ onPress, whiteColor }) => {

    return (
            <TouchableOpacity onPress={onPress} >
                <VectorImage style={styles.img} source={whiteColor ? require('../../assets/Icons/whiteCross.svg') : require('../../assets/Icons/closeCross.svg')}/>
            </TouchableOpacity>
    )
}

export default CloseHeader;