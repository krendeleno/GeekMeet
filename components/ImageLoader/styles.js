import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',

    },

    user: {
        width: '37.5%',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    img: {
        width: 200,
        height: 200,
        borderRadius:21
    },
    smallImg: {
        width: 100,
        height: 100,
        borderRadius:21,
        marginVertical:5,
        marginHorizontal:5
    },
    back:{
        justifyContent:"center",
        paddingStart:20,
        marginHorizontal:5,
        width: 100,
        height: 100,
        backgroundColor:"#F8F6FE",
        borderRadius:21,
    }
});

export default styles;