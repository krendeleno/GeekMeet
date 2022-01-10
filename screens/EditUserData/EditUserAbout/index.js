import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import {globalStyles, colors, contentWidth} from '../../../styles/globalStyles'
import UserAboutBox from "../../../components/UserAboutBox";


const EditUserAbout = ({route, navigation}) => {
    const [userData, setData] = useState(route.params.userData);
    const onChange = (event) => {
        const {name, text} = event;
        setData(values => ({...values, [name]: text}))
    }

    const onPress = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={globalStyles.container}>
            <UserAboutBox userData={userData} onChange={onChange} onPress={onPress} title="Готово" isEdit={true}/>
        </View>
    )
}

export default EditUserAbout;