import { StyleSheet } from "react-native";
import {colors} from '../../styles/globalStyles'

export const styles = StyleSheet.create({

    contaiter:{
        backgroundColor: colors.green,
        alignSelf: 'flex-start',
        paddingVertical: 1,
        paddingHorizontal: 3,
        borderRadius:4
    },

    text:{   
        color:"white",
        fontWeight:"bold"
    }
    
})