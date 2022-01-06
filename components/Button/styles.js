import {StyleSheet, Dimensions} from "react-native";
const win = Dimensions.get('window');
import {fonts} from "../../styles/globalStyles";

const styles = (color, size) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width: (size == "100%") ? win.width -40 : size,
        maxHeight: 50,
        marginTop: (size == "100%") ? 10 : '5%',
        borderRadius: 16,
        minHeight: 50
    },
    innerContainer:{
        flexDirection:"row",
        paddingVertical:10,
    },
    text: {
        color: "white",
        fontSize: 18,
        marginEnd:15,
        fontFamily:fonts.bold
    },

    image: {
    }
});

export default styles;