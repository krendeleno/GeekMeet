import React from 'react'
import { Text, View } from 'react-native';

const Seats = ({style, available}) => {

    const stringMaker = (number)=>{
        const titles = ['место', 'места', 'мест']
        const cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

    return (
        <View style={style}>
            <Text style={style.text}>{available} {stringMaker(available)}</Text>
        </View>
    )
}

export default Seats
