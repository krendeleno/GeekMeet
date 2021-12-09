import { StyleSheet } from "react-native";
import { colors } from './globalStyles'

export const detailsStyle =StyleSheet.create({
    container: {

    },
    img: {
        width: 400, 
        height: 400
    },
    viewInfo:{
        flexDirection:"row"
    },
    title:{
        
    },
    seats:{
        contaiter:{
            backgroundColor: colors.green,
        alignSelf: 'flex-start',
        paddingVertical: 1,
        paddingHorizontal: 3,
        borderRadius:4
        },
        text:{   
            color:"white",
            fontWeight:"bold"
        }
    },
    date:{

    },
    place:{

    },
    discription:{
        backgroundColor: colors.lighterViolet,
        alignSelf: 'flex-start',
        borderRadius: 16,
        paddingVertical: 15,
        paddingHorizontal: 15,
        text:{
            
        }
    },
    bigUserImage:{
        width:120,
        height:120,
        borderRadius: 100
    },
    btnImg:{
        width:20,
        height:20
    }

});