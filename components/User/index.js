import React from 'react'
import { Image} from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler';

import { users } from '../../MockData/users'

const User = ({style, userId}) => {
    const user = users.find(item => item.id === userId);

    return (
        <TouchableOpacity>
            <Image style={style}  source={{uri: user.image}} />
        </TouchableOpacity>
    )
}

export default User
