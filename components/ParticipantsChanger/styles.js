import { StyleSheet } from "react-native";
import { colors, fonts } from "../../styles/globalStyles";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width:"80%",
        alignItems:"center",
        justifyContent:"center",
        marginVertical:13
    },
    title:{
        fontFamily:fonts.bold,
        fontSize:16,
        color:colors.textViolet,
        marginEnd:30
    },
    num:{
        color:"#B9C08B",
        fontFamily:fonts.bold,
        fontSize:30,
        marginHorizontal:10
    },
    img:{
        alignSelf:"center",

    }
    
})

export default styles