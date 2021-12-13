import {StyleSheet} from "react-native";

const styles = (color, size) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        maxHeight: 50,
        marginTop: '5%',
        borderRadius: 17.5,
    },
    text: {
        color: "white",
        fontSize: 18,
    },

    image: {
    }
});

export default styles;