import {StyleSheet, Dimensions} from "react-native";
const win = Dimensions.get('window');
import {colors} from "../../styles/globalStyles";


const styles = (color, size, height) => StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        borderColor: color,
        borderWidth: 3,
        borderRadius: 17.5,
        width: (size == "100%") ? win.width -40 : size,
        marginVertical: '1.5%',
        minHeight: height,
        maxHeight: height,
        backgroundColor:'white',
    },

    errorNotification: {
        color: colors.red,
    },
});

export default styles;