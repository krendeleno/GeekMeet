import React, {useState} from 'react';
import { Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { tags } from '../../MockData/tags'
import styles from './styles'

const Tag = ({id, checkable, onChange, small}) => {
  const [checked, setChecked] = useState(true);
  
  const tag = tags.find(item => item.id === id)

  const onPress = ()=>{
    if (checkable) {
      setChecked(!checked);
      onChange(id,checked);
    }
  }
    return (
        <TouchableWithoutFeedback style={small ? styles.unChangable : ( checked ? [styles.container, styles.checked]: [styles.container, styles.notChecked])} onPress= {onPress}>
            <Text style={small ? styles.unChangable.text : styles.container.text} >{tag.name}</Text>
        </TouchableWithoutFeedback>
    )
}


export default Tag
