import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MessagesList from "../screens/Messages";
import ChatDetails from "../screens/ChatDetails";
import ChatHeader from "../components/ChatHeader";

const Stack = createStackNavigator();

const MessagesNavigation = ({}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="MessagesList" component={MessagesList}
                          options={{
                              headerShown: false,
                          }}/>
        </Stack.Navigator>
    )
}

export default MessagesNavigation;
