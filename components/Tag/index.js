import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './styles'
const Tag = ({title, checkable, onChange}) => {
  const [checked, setChecked] = useState(true);

  const onPress = ()=>{
    if (checkable) {
      setChecked(!checked);
      onChange(title,checked);

      /* console.log("-----"); */
    }

  }

    return (
        <TouchableWithoutFeedback style={checked ? styles.checked : styles.notChecked} onPress= {onPress}>
            <Text style={styles.text} >{title}</Text>
        </TouchableWithoutFeedback>
    )
}


export default Tag



/* {checked ? styles.checked : styles.notChecked} */