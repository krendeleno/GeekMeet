import React from 'react'
import VectorImage from 'react-native-vector-image';
import {styles} from './styles'
const ButtonIcon = (image) => {

    const renderImage = (image) => {
        switch(image) {
            case 'cross':
              return <VectorImage style ={styles.img} source={require('../../assets/Icons/whiteCross.svg')}/>
            case 'plus': 
              return <VectorImage style ={styles.img} source={require('../../assets/Icons/whitePlus.svg')}/>
            default:
              return <VectorImage style ={styles.img} source={require('../../assets/Icons/whiteCheckMark.svg')}/>
          }
    }

    return (
        <>
            {renderImage(image)}
        </>
    )
}

export default ButtonIcon
