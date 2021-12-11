import { StyleSheet } from "react-native";
import { colors } from './globalStyles'

export const detailsStyle =StyleSheet.create({

    container: {
       backgroundColor:"white"
    },
    header:{
        flexDirection:"row", 
        width:390,
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
        width: 400, 
        height: 400,
        
    },
    viewInfo:{
        flexDirection:"row",

        width:345,
        justifyContent:"space-between",
        alignSelf:"center"
    },
    title:{
        fontSize:30,
        fontWeight:"900",
        color:"#49386C",
        alignSelf:"flex-start",
        marginLeft:20,
        marginTop:20,
        marginBottom:8
    },
    date:{
        color:"#6C647C",
        fontSize:14,
        fontWeight:"600",
        marginVertical:5
    },
    place:{
        color:"#2D2244",
        fontSize:14,
        fontWeight:"600",

    },
    description:{
        width:345,
        backgroundColor: colors.lighterViolet,
        alignSelf: 'center',
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical:10,
        text:{
            lineHeight:24,
            fontSize:14,
            fontWeight:"400",
        }
    },
    bigUserImage:{
        width:120,
        height:120,
        borderRadius: 100,
        /* alignSelf:"flex-end", */
    },
    btnImg:{
        width:20,
        height:20
    }

});