import { StyleSheet } from "react-native"
import { colors } from "../../styles/globalStyles"


const styles = (fromRequests, greenBack)=>StyleSheet.create({
    container:{
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor: 'white',
        backgroundColor: fromRequests ? (greenBack ? colors.lighterGreen : colors.lighterViolet) : "white",
        height: 520,
        width:300,
        borderRadius: 25,
        elevation: 20,
        shadowColor: fromRequests && '#171717',
        shadowOffset: fromRequests && {width: 0, height: 5},
        shadowOpacity: fromRequests && 0.3,
        shadowRadius: fromRequests && 5,
        
        
    },

    description:{
        backgroundColor: fromRequests ? "white" :colors.lighterViolet,
        width:200,
        alignSelf: 'center',
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical:10,
        text:{
            color:"#49386C",
            fontSize: 14,
            textAlign: 'center'
        }
    },
    img:{
        width: fromRequests ? 120 : 170,
        height: fromRequests ? 120 : 170,
        borderRadius:100,
        alignSelf:"center",
        marginVertical:10,
    },
    nick:{
        color:"#49386C",
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center'
    },
    tagList:{
        alignSelf:"center"
    }
})
export default styles