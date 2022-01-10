import {StyleSheet} from 'react-native';
import {fonts, colors} from '../../styles/globalStyles';

const styles = (color)=>StyleSheet.create({
    container:{
        padding:15, 
        backgroundColor:"white", 
        height:145, 
        borderRadius:14, 
        paddingTop:30
    },
    btnContainer:{
        backgroundColor: color,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width: 100,
        maxHeight: 50,
        marginTop: 10,
        borderRadius: 16,
        minHeight: 50

    },
    rowContainer:{
        flexDirection:"row", 
        paddingHorizontal:40, 
        paddingVertical:15, 
        justifyContent:"space-around"
    },
    mainText:{
        alignSelf:"center", 
        color:colors.textViolet,
        fontFamily:fonts.regular
    },
    infoText:{
        alignSelf:"center",
        fontFamily:fonts.regular
    },
    btnText:{
        color:"white", 
        fontWeight:"bold",
        fontFamily:fonts.bold
    }
})

export default styles;