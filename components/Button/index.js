import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';


const Button = ({onPress}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.img}
                       source={{uri: 'https://static.wikia.nocookie.net/cookieclicker/images/5/5a/PerfectCookie.png/revision/latest?cb=20130915084021&path-prefix=ru'}}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    img: {
        width: 300,
        height: 300
    }
});

export default Button;