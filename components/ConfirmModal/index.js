import React from 'react'
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from "react-native-modal";
import { colors} from '../../styles/globalStyles';
import styles from './styles'

const ConfirmModal = ({yesFunc, toggleFunc, text, isModalVisible }) => {
    return (
        <Modal isVisible={isModalVisible}>
                <View style={styles().container}>
                    <Text style={styles().mainText}>{text}</Text>

                    <View style={styles().rowContainer}>
                        <TouchableOpacity title="Да" onPress={yesFunc} style={styles(colors.green).btnContainer}>
                            <Text style={styles().btnText}>
                                Да
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity title="Нет" onPress={toggleFunc} style={styles(colors.darkRed).btnContainer}>
                            <Text style={styles().btnText}>
                                Нет
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                </View>
            </Modal>
    )
}


export default ConfirmModal
