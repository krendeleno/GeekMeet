import {StyleSheet} from "react-native";
import {colors, fonts} from "../../styles/globalStyles";

const styles = StyleSheet.create({
    messageContainer: {
        flexDirection: 'row',
        marginBottom: '3%',
        marginLeft: '1.5%',
        maxWidth: '60%',
        alignItems: 'flex-end'
    },

    messageColor: {
        backgroundColor: 'white',
        borderRadius: 25,
        borderBottomLeftRadius: 0
    },

    messageRow: {
        flexDirection: 'row',
        alignSelf: 'flex-start'
    },

    yourMessageColor: {
        backgroundColor: colors.tagViolet,
        borderRadius: 25,
        borderBottomRightRadius: 0
    },

    yourMessageRow: {
        flexDirection : 'row-reverse',
        alignSelf: 'flex-end'
    },

    messageText: {
        alignSelf: 'flex-start',
        paddingVertical: 12,
        paddingHorizontal: 15,
    },

    author: {
        alignSelf: "flex-end"
    },
    date: {
    },
    text: {
        fontFamily:fonts.regular,
        fontSize: 18,
        color: colors.deepViolet,
    },
    img: {
        width: 30,
        height: 30,
        borderRadius: 150,
        resizeMode: 'stretch',
    },
    noImg: {
        width: 0,
        height: 0,
    },
});

export default styles;