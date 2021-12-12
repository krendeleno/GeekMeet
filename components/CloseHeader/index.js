import React from 'react';
import styles from "./styles";
import Button from "../Button";
import VectorImage from "react-native-vector-image";



const CloseHeader = ({ onPress, whiteColor }) => {

    return (
            <Button onPress={onPress} >
                <VectorImage style={styles.img} source={whiteColor ? require('../../assets/Icons/whiteCross.svg') : require('../../assets/Icons/closeCross.svg')}/>
            </Button>
    )
}

export default CloseHeader;