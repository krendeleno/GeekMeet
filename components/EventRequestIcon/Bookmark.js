import React from 'react'
import { TouchableOpacity } from 'react-native'
import VectorImage from 'react-native-vector-image';

import styles from './styles'

const Bookmark = ({isMarked, onPress, style, whiteColor}) => {

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            { isMarked ? 
                <VectorImage 
                    style ={styles.bookmark} 
                    source={whiteColor? require('../../assets/Icons/whiteBookmarkFill.svg') : require('../../assets/Icons/bookmarkFill.svg')}
                />
            :
                <VectorImage 
                    style ={styles.bookmark} 
                    source={whiteColor? require('../../assets/Icons/whiteBookmarkStroke.svg') :require('../../assets/Icons/bookmarkStroke.svg')}
                />
            } 
        </TouchableOpacity>
    )
}

export default Bookmark
