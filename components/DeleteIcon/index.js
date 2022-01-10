import React from 'react'
import { TouchableOpacity } from 'react-native'
import VectorImage from 'react-native-vector-image'
import styles from './styles'

const DeleteIcon = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <VectorImage
                    style ={styles.deleteIcon} 
                    source={require('../../assets/Icons/deleteIcon.svg') }
                />
        </TouchableOpacity>
    )
}

export default DeleteIcon
