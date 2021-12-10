import {StyleSheet} from "react-native";

const styles = (color) => StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: color,
        flexDirection:"row"
    },
    img: {
        width: 20,
        height: 20
    }
});

export default styles;