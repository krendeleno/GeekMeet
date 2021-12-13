import {StyleSheet} from "react-native";
import {colors} from "../../styles/globalStyles";


const styles = (color, size, height) => StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        borderColor: color,
        borderWidth: 3,
        borderRadius: 17.5,
        width: size,
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