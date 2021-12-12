import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

export const styles = (focused) => StyleSheet.create({
    container:{
        backgroundColor: focused ? colors.violet : "white",
        borderRadius:12,
        width:65,
        height:45,
        justifyContent:"center",
    },


/*     focused:{
        backgroundColor:colors.violet,
        borderRadius:12,
        width:65,
        height:45,
        justifyContent:"center",

    },
    unFocused:{
        backgroundColor:"white",
        borderRadius:12,
        width:65,
        height:45,
        justifyContent:"center",
    }, */

    img:{
        alignSelf:"center",
        resizeMode:"contain",
        width:30
    }
})