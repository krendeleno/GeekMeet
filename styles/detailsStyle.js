import { Dimensions, StyleSheet } from "react-native";
import { colors, fonts } from './globalStyles'

const win = Dimensions.get('window');

export const detailsStyle =StyleSheet.create({

    container: {
       backgroundColor:"white",
       overflow:"hidden",
       paddingBottom:50
    },
    header:{
        flexDirection:"row", 
        width: win.width,
        justifyContent:"space-between",
        position:"absolute",
        zIndex: 2 
        
    },
    bookmark:{
        marginHorizontal:20,
        marginVertical:15,
        alignSelf:"flex-end"
    },
    img: {
        height: 400,
        width: win.width,
    },
    topInnerShadow:{
        position:"absolute",
        width: win.width,
        height: 200,
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 100},
        shadowOpacity: 1,
        shadowRadius: 100,
        backgroundColor:"black",
        top:-200
        
        

    },
   /*  bottomInnerShadow:{
        position:"absolute",
        width: win.width,
        height: 200,
        backgroundColor:"black",
        elevation: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -100},
        shadowOpacity: 1,
        shadowRadius: 100,
        bottom:-200,


    } */
    containerForInnerShadow:{
        overflow:"hidden",
        height: 400,
        width: win.width,
        position:"absolute",
        
        
    },
    innerShadow: {
        height: 200,
        width:300,
        borderRadius: 25,
        backgroundColor:"black",
        position:"absolute",
        bottom:-200,

        elevation: 20,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -100},
        shadowOpacity: 1,
        shadowRadius: 100
    },

    viewInfo:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignSelf:"center",
        width: win.width,
        paddingHorizontal:20,
        marginBottom:10

    },
    title:{
        fontSize:30,
        fontFamily:fonts.bold,
        color:"#49386C",
        alignSelf:"flex-start",
        marginHorizontal:20,
        marginTop:20,
        marginBottom:8
    },
    date:{
        color:"#6C647C",
        fontSize:14,
        marginVertical:5,
        fontFamily:fonts.regular,
    },
    place:{
        color:"#2D2244",
        fontSize:14,
        fontFamily:fonts.regular,

    },
    description:{
        backgroundColor: colors.lighterViolet,
        alignSelf: 'center',
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginTop:10,
        marginBottom:20,
        width: win.width-40,
        
        text:{
            lineHeight:24,
            fontSize:14,
            fontFamily:fonts.regular,
            color:colors.textViolet,
        }
    },
    bigUserImage:{
        width:120,
        height:120,
        borderRadius: 100,
    },
    btnImg:{
        width:20,
        height:20
    }

});