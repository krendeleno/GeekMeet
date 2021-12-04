import {StyleSheet} from "react-native";

const styles = (color) => StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: color,
    },
    img: {
        width: 300,
        height: 300
    }
});

export default styles;