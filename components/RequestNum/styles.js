import { StyleSheet } from "react-native";
import {colors} from '../../styles/globalStyles'

export const styles=StyleSheet.create({
    friends:{
        container:{
            backgroundColor:colors.lighterViolet,
            borderRadius:100,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:"flex-start",
            width:31,
            height:31
        },
        text:{
            fontWeight:"500"
            
        }
    },
    eventRequest:{
        container:{
            backgroundColor:colors.lighterViolet,
            borderRadius:100,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:"center",
            width:50,
            height:50
        },
        text:{
            fontWeight:"500",
            fontSize: 26
            
        }
    }
    

})