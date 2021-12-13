import { StyleSheet } from "react-native";
import {colors, fonts} from '../../styles/globalStyles'

export const styles = (fromSearch) => StyleSheet.create({

    container:{
        backgroundColor: colors.green,
        alignSelf: 'flex-start',
        paddingVertical: fromSearch ? 0 : 2,
        paddingHorizontal: 6,
        borderRadius:4,
        marginTop: fromSearch ? 3 : 7
    },

    text:{   
        color:"white",
        fontFamily:fonts.bold,
        fontSize: fromSearch ? 14 : 16
    }
    
})