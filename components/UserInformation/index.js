import React from 'react'
import { Image, Text, View } from 'react-native'
import Description from '../Description'
import TagList from '../TagList'
import styles from './styles'

const UserInformation = ({user, fromRequests}) => {
    
    return (
        <View style={styles.container}>
            <Image source={{uri: user.image}} style={fromRequests ? [styles.img, styles.smallImg] : styles.img}/>
            {fromRequests &&
            <Text style={styles.nick}>{user.nick}</Text>}
            <Description description={user.description} style={fromRequests ? [styles.description, styles.whiteBackground] : [styles.description, styles.violetBackground]}/>
            <TagList tagList={user.tags} fromSearch={false}/>
        </View>
    )
}


export default UserInformation
