import {StyleSheet} from "react-native";
import {colors} from "../../styles/globalStyles";

const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "auto",
        width: '100%',
        paddingBottom: '10%',
    },

    registration: {
        marginTop: '2.5%',
        fontSize: 18,
        color: colors.green,
        textDecorationLine: "underline",
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.violet,
    }
});

export default styles;