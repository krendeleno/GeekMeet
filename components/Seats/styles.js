import { StyleSheet } from "react-native";
import {colors} from '../../styles/globalStyles'

export const styles = StyleSheet.create({

    container:{
        backgroundColor: colors.green,
        alignSelf: 'flex-start',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius:4,
        marginTop:7
    },

    text:{   
        color:"white",
        fontWeight:"bold",
        fontSize:16
    },

    containerSearch:{
        backgroundColor: colors.green,
        alignSelf: 'flex-start',
        paddingVertical: 1,
        paddingHorizontal: 6,
        borderRadius:4,
        marginTop:3
    },

    textSearch:{   
        color:"white",
        fontWeight:"bold",
        fontSize:14
    }
    
})