import React from 'react'
import { Image} from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';

import { users } from '../../MockData/users'

const User = ({style, userId, navigation}) => {
    const user = users.find(item => item.id === userId);

    const goToUserProfile = () => {
        navigation.navigate('UserInfo', {
            userId: userId,
        })
    }

    return (
        <TouchableOpacity onPress={goToUserProfile}>
            <Image style={style}  source={{uri: user.image}}/>
        </TouchableOpacity>
    )
}

export default User
