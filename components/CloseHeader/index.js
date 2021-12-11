import React from 'react';
import styles from "./styles";
import Button from "../Button";
import VectorImage from "react-native-vector-image";


const CloseHeader = ({ onPress }) => {

    return (
            <Button onPress={onPress} >
                <VectorImage source={require('../../assets/Icons/cross.svg')} style={styles.img} />
            </Button>
    )
}

export default CloseHeader;