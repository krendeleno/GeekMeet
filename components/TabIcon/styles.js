import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
    focused:{
        backgroundColor:colors.lightViolet,
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
    },

    img:{
        alignSelf:"center",
        height:30,
        width:30,
    }
})