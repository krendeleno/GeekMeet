import { StyleSheet } from "react-native";
import { fonts} from '../../styles/globalStyles'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    card: {
        height: 430,
        width:300,
        borderRadius: 25,
        
        backgroundColor:"white",
        elevation: 20,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 0.3,
        shadowRadius: 10,
        alignSelf:"center"
        /* overflow: 'hidden' */
    },
    viewForOverflow:{
        overflow: 'hidden',
        height: 430,
        width:300,
        borderRadius: 25,
        justifyContent: 'flex-end',
    },
    
    innerShadow: {
        height: 150,
        width:300,
        backgroundColor:"rgba(0, 0, 0, 0.4)",
        position:"absolute",
        paddingHorizontal: 20,
        paddingVertical:15,
    },
    
    place:{
        color:"white",
        fontFamily:fonts.regular,
    },
    title:{
        color:"white",
        fontSize:26,
        fontWeight:"bold",
        marginBottom:10,
        fontFamily:fonts.bold,
    },
    date:{
        color:"white",
        fontSize:16,
        marginBottom:2,
        fontWeight:"600",
        fontFamily:fonts.regular,
    },
    time:{
        color:"white",
        fontFamily:fonts.regular,
    },
    img:{
        height: 430,
        width:300,
        position:"absolute",
        borderRadius: 25,
        opacity: 0.8,
    }
});

export default styles;