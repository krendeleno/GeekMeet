import React, {useState} from 'react';
import { Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './styles'

const Tag = ({title, checkable, onChange, small, color, fromAddScreens, id, screen}) => {
  const [checked, setChecked] = useState(color);

  const onPress = ()=>{
    if (checkable) {
      setChecked(!checked);
      onChange(id,checked);
    }
  }
    return (
        <TouchableWithoutFeedback style={styles(small, checked && screen !== "TagPicker", fromAddScreens).container} onPress= {onPress}>
            <Text style={styles(small, checked).container.text} >{title}</Text>
        </TouchableWithoutFeedback>
    )
}


export default Tag
