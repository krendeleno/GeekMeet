import React from 'react'
import { TouchableOpacity } from 'react-native'
import VectorImage from 'react-native-vector-image'
import styles from './styles'

const IconButton = ({source, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <VectorImage style={styles.img} source={source}/>
        </TouchableOpacity>
    )
}

export default IconButton
