import React, {useState} from 'react';
import { Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './styles'

const Tag = ({title, checkable, onChange, small}) => {
  const [checked, setChecked] = useState(true);

  const onPress = ()=>{
    if (checkable) {
      setChecked(!checked);
      onChange(title,checked);
    }
  }
    return (
        <TouchableWithoutFeedback style={small ? styles.unChangable : ( checked ? [styles.container, styles.checked]: [styles.container, styles.notChecked])} onPress= {onPress}>
            <Text style={small ? styles.unChangable.text : styles.container.text} >{title}</Text>
        </TouchableWithoutFeedback>
    )
}


export default Tag
