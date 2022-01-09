import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {colors, globalStyles} from "../../styles/globalStyles";
import styles from "./styles";



const Loader = () => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" style={styles.loader} color={colors.violet}/>
        </View>

    );
};

export default Loader;