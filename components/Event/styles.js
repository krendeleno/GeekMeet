import { Dimensions, StyleSheet } from "react-native";
const win = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        /* justifyContent: "space-between", */
        paddingVertical:15,
        alignItems:"center",
        alignSelf:"center",
        /* paddingHorizontal:20, */
        width:win.width - 40
        
    },
    img:{
        width:100,
        height:100,
        borderRadius:16,
        marginEnd:15
    },
    iconsContainer:{
        position: "absolute",
        right:0
    },
    infoContainer:{
        
    }
});

export default styles;