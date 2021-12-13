import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/globalStyles";

export const styles = StyleSheet.create({
    container:{
        
    },
    regularUser:{
        width:95,
        height:95,
        borderRadius: 100,
        marginHorizontal:5,
        marginVertical:5
    },
    labelContainer:{
        flexDirection:"row",
        alignItems: 'center',
    },
    text:{
        marginStart:20,
        marginRight:10,
        fontSize:18,
        fontFamily: fonts.bold,
        color: colors.textViolet
    },
    flatlist:{
        paddingStart:20
    },
})