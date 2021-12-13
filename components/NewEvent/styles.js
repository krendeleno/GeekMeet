import { StyleSheet } from "react-native";

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
        paddingHorizontal:20,
        paddingVertical:50,
        backgroundColor:"white",
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
    
    place:{
        color:"white",
    },
    title:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:13
    },
    date:{
        color:"white",
        fontSize:14,
        marginBottom:2,
        fontWeight:"600",
    },
    time:{
        color:"white",
    },
    img:{
        height: 430,
        width:300,
        position:"absolute",
        borderRadius: 25,
        opacity: 0.7,
    }
});

export default styles;