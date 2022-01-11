import React, {useContext, useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import { colors, contentWidth} from '../../styles/globalStyles';
import styles from './styles'
import Button from "../Button";
import {Context} from "../Context";

const InfoModal = ({}) => {
    const [context, setContext] = useContext(Context);
    const toggleFunc = () => {
        setContext(values => ({...values, isInfoModalVisible: false, textModal: '', infoModal: ''}))
    }

        return (
        <Modal isVisible={context.isInfoModalVisible} onBackButtonPress={toggleFunc} onBackdropPress={toggleFunc} >
                <View style={styles().container}>
                    <Text style={styles().mainText}>{context.textModal}</Text>
                    <Text style={styles().infoText}>{context.infoModal}</Text>
                    <Button title="Оки-доки" onPress={toggleFunc} color={colors.green} size={contentWidth.large}/>
                </View>
            </Modal>
    )
}


export default InfoModal
