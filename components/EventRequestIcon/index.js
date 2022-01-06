import React from 'react';
import { TouchableOpacity } from 'react-native';
import VectorImage from 'react-native-vector-image';

import styles from './styles'

const EventRequestIcon = ({status, onPress}) => {

    const renderImage = (status)=>{
        switch (status){
            case "sent":
                return <VectorImage 
                        style ={styles.img} 
                        source={require('../../assets/Icons/cross.svg')}
                    />
            case "accepted":
                return <VectorImage 
                        style ={styles.img} 
                        source={require('../../assets/Icons/checkMark.svg')}
                    />
            case "rejected":
                return <VectorImage 
                        style ={styles.img} 
                        source={require('../../assets/Icons/grayPlus.svg')}
                    />
            default:
                return <VectorImage 
                        style ={styles.img} 
                        source={require('../../assets/Icons/plus.svg')}
                    />

        }
    }


    return (
        <TouchableOpacity style={styles.container} onPress={onPress} disabled={status == "rejected"}>
          {renderImage(status)}
        </TouchableOpacity>
    )
}

export default EventRequestIcon
