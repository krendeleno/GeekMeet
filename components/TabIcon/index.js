import React from 'react'
import VectorImage from 'react-native-vector-image'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {styles} from './styles'

const TabIcon = ({imageFocused, image, focused, onChange, tabIndex} ) =>{

    const onPress = ()=>{
            onChange(tabIndex);
    }

    return(
        <TouchableWithoutFeedback style={focused ? styles.focused : styles.unFocused} onPress={onPress} >
            <VectorImage
                style={styles.img}
                source={focused ? imageFocused : image}
            />
        </TouchableWithoutFeedback>   
    )
}

export default TabIcon
