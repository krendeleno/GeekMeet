import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import metro from '../../MockData/metro'
import styles from './styles'


const MetroPicker = () => {
    return (
        <>
            <RNPickerSelect 
                placeholder={{
                    label: 'Выбор станции метро',
                    value: null,
                }}

                style={styles}
                onValueChange={(value) => console.log(value)}
                items={metro}
            />
        </>
    )
}

export default MetroPicker
