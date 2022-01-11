import React from 'react'
import { Image, Text, View } from 'react-native'
import Description from '../Description'
import TagList from '../TagList'
import styles from './styles'

const UserInformation = ({user, fromRequests, greenBack}) => {
    
    return (
        <View style={styles(fromRequests, greenBack).container}>
            <Image source={{uri: user.image}} style={styles(fromRequests).img}/>
            {fromRequests &&
            <Text style={styles().nick}>{user.nick}</Text>}
            <Description description={user.description} style={styles(fromRequests).description}/>
            <View style={styles().tagList}>
                
                <TagList tagList={user.tags} fromSearch={false} color={!greenBack} screen="UserInformation"/>
            </View>
        </View>
    )
}


export default UserInformation
