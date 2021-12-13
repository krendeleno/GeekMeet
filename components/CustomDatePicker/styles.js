import { StyleSheet } from "react-native";
import { colors, contentWidth, fonts } from "../../styles/globalStyles";

const styles = StyleSheet.create({
    container:{
        alignContent:"center",
        marginHorizontal:20,
        marginTop:20
        
    },
    text:{
        fontSize:16,
        color: colors.textViolet,
        fontFamily:fonts.regular
    },
    title:{
        fontSize:16,
        color: colors.textViolet,
        fontFamily:fonts.bold,
        alignSelf:"center"
    },
    innerContainer:{
        alignItems:"center",
        flexDirection: 'row',
        borderWidth: 3,
        borderRadius: 17.5,
        width:100,
        height:50,
        justifyContent:"center",
        borderColor:colors.lightViolet

    }
})

export default styles