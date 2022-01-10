import {StyleSheet} from "react-native";
import {colors} from "../../styles/globalStyles";


const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.btnGrey,
        borderRadius:50,
        width:26,
        height:26,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:10,
        marginEnd:5
    },

    img: {
        width:17,
        resizeMode:"contain",
    },
});

export default styles;