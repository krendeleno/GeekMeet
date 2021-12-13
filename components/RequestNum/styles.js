import { StyleSheet } from "react-native";
import {colors, fonts} from '../../styles/globalStyles'

export const styles = (fromFriends) => StyleSheet.create({
    
    container:{
        backgroundColor:colors.lighterViolet,
        borderRadius:100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        marginStart: 15,
        width: fromFriends ? 31 : 50,
        height: fromFriends ? 31 : 50,
        position: !fromFriends ? "absolute" : "relative",
        right:!fromFriends ? 20 : 18,
    },
    text:{
        fontFamily: fonts.bold,
        fontSize: fromFriends ? 18 : 26,
        color: colors.violet
    }
    

})