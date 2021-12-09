import React from 'react'
import { TouchableOpacity } from 'react-native'
import VectorImage from 'react-native-vector-image';

import styles from './styles'

const Bookmark = ({isMarked, onPress}) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            { isMarked ? 
                <VectorImage 
                    style ={styles.img} 
                    source={require('../../assets/Icons/bookmarkFill.svg')}
                />
            :
                <VectorImage 
                    style ={styles.img} 
                    source={require('../../assets/Icons/bookmarkStroke.svg')}
                />
            } 
        </TouchableOpacity>
    )
}

export default Bookmark
