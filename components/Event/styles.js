import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        /* justifyContent: "space-between", */
        paddingVertical:15,
        alignItems:"center",
        paddingHorizontal:20
        
    },
    img:{
        width:100,
        height:100,
        borderRadius:16,
        marginEnd:15
    },
    iconsContainer:{
        position:"absolute",
        right:20
    },
    infoContainer:{
        
    }
});

export default styles;