import { StyleSheet } from "react-native";
import { colors, fonts } from "./globalStyles";

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingVertical:10,
    },
    upperContainer:{
        flexDirection:"row",
        marginStart:20,

    },
    rightUpperContainer:{
        marginStart:15,
        paddingTop:10
        
    },
    nick:{
        color: colors.textViolet,
        fontSize:20,
        
        marginVertical:10,
        fontFamily:fonts.bold
    },
})

export default styles