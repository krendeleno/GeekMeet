import { StyleSheet } from "react-native";
import {globalStyles, colors} from '../../styles/globalStyles'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 400, 
        height: 400
    },
    title:{
        
    },
    seats:{
        backgroundColor: colors.green,
        alignSelf: 'flex-start',
        paddingVertical: 1,
        paddingHorizontal: 3,
        borderRadius:4,
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
    }


});