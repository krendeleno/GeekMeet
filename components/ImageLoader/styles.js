import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        paddingBottom: '5%',
    },

    user: {
        width: '37.5%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    img: {
        width: 200,
        height: 200
    },
    smallImg: {
        width: 100,
        height: 100
    }
});

export default styles;