import React, {useState} from 'react';
import Intro from "../screens/Registration/Intro";
import {createStackNavigator} from "@react-navigation/stack";
import BackHeader from "../components/BackHeader";
import CloseHeader from "../components/CloseHeader";
import {colors, fonts} from "../styles/globalStyles";
import EditUserAvatar from "../screens/EditUserData/EditUserAvatar";
import EditUserInfo from "../screens/EditUserData/EditUserInfo";
import EditUserAbout from "../screens/EditUserData/EditUserAbout";

const Stack = createStackNavigator();

const EditUserData = ({route}) => {

    const [userData, setData] = useState(route.params.userData);
    const onChange = (event) => {
        const {name, text} = event;
        setData(values => ({...values, [name]: text}))
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="EditUserInfo"
                          options={
                              ({navigation}) => ({
                                  headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                  title: "Редактирование",
                                  presentation: 'modal',
                                  headerTitleStyle: {
                                      color: colors.textViolet,
                                      fontFamily: fonts.bold,
                                      fontSize: 20,
                                      textAlignVertical: "center"
                                  },
                              })
                          }>
                {(props) => <EditUserInfo {...props} userData={userData} onChange={onChange}/>}
            </Stack.Screen>
            <Stack.Screen name="EditUserAvatar" options={({ navigation }) => ({
                headerLeft: () => <BackHeader onPress={navigation.goBack}
                color="green" />,
                title: "Редактирование",
            })}>
                {(props) => <EditUserAvatar {...props} userData={userData} setData={setData}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default EditUserData;