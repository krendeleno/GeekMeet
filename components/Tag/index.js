import React, {useState} from 'react';
import { Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { tags } from '../../MockData/tags'
import styles from './styles'

const Tag = ({id, checkable, onChange}) => {
  const [checked, setChecked] = useState(true);

  const tag = tags.find(item => item.id === id)

  const onPress = ()=>{
    if (checkable) {
      setChecked(!checked);
      onChange(id,checked);
    }
  }
    return (
        <TouchableWithoutFeedback style={checked ? styles.checkedContainer : styles.notCheckedContainer} onPress= {onPress}>
            <Text style={styles.text} >{tag.name}</Text>
        </TouchableWithoutFeedback>
    )
}


export default Tag
