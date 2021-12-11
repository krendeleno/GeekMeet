import { StyleSheet } from "react-native"
import { colors } from "../../styles/globalStyles"


const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignContent:"center",
        
    },
    violetBackground:{
        backgroundColor: colors.lighterViolet,
    },
    whiteBackground:{
        backgroundColor: "white",
    },
    description:{
        width:200,
        alignSelf: 'center',
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical:10,
        text:{
            color:"#49386C",
            fontSize: 16,
            fontWeight: '400',
            textAlign: 'center'
        }
    },
    smallImg:{
        width:120,
        height:120,
    },
    img:{
        width:170,
        height:170,
        borderRadius:100,
        alignSelf:"center",
        marginVertical:10,
    },
    nick:{
        color:"#49386C",
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center'
    }
})
export default styles