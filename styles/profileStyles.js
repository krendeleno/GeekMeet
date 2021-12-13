import { StyleSheet } from "react-native";
import { fonts } from "./globalStyles";

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        paddingVertical:10
    },
    upperContainer:{
        flexDirection:"row",
        marginStart:20,
        marginBottom:10

    },
    rightUpperContainer:{
        marginStart:15,
        paddingTop:10
        
    },
    nick:{
        color:"#49386C",
        fontSize:20,
        
        marginVertical:10,
        fontFamily:fonts.bold
    },
})

export default styles