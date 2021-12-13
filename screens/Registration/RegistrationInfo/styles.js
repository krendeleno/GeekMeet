import {StyleSheet} from "react-native";
import {colors} from "../../../styles/globalStyles";

const styles = () => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: "auto",
        width: '100%',
    },

    login: {
        marginTop: '2.5%',
        fontSize: 18,
        color: colors.violet,
        textDecorationLine: "underline",
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.green,
        marginBottom: '10%',
    }
});

export default styles;