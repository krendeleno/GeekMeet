import React from 'react';
import { TouchableOpacity } from 'react-native';
import VectorImage from 'react-native-vector-image';

import styles from './styles'

const EventRequestIcon = ({status, onPress}) => {

    const renderImage = (status)=>{
        if(status=="sent") {
            return <VectorImage 
                        style ={styles.img} 
                        source={require('../../assets/Icons/cross.svg')}
                    />
        } else if (status=="accepted"){
            return <VectorImage 
                        style ={styles.img} 
                        source={require('../../assets/Icons/checkMark.svg')}
                    />
        } else {
            return <VectorImage 
                        style ={styles.img} 
                        source={require('../../assets/Icons/plus.svg')}
                    />
        }
    }


    return (
        <TouchableOpacity onPress={onPress}>
          {renderImage(status)}
        </TouchableOpacity>
    )
}

export default EventRequestIcon
