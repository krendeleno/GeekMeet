import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import Feed from "../screens/Feed";
import EventDetails from "../screens/EventDetails";

const Stack = createNativeStackNavigator();

const FeedNavigation = () => {
    return (
        <Stack.Navigator mode="modal" screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="FeedList" component={Feed}
                          />
        </Stack.Navigator>
    )
}

export default FeedNavigation;