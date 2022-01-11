import {StyleSheet, Dimensions} from "react-native";
const win = Dimensions.get('window');
import {colors, fonts} from "../../styles/globalStyles";


const styles = StyleSheet.create({

    placeholder:{
        /* color: "red" */
        fontFamily:fonts.regular,
    },
    inputIOS: {
        justifyContent: 'center',
        alignContent:"center",
        alignSelf:"center",
        borderColor: colors.lightViolet,
        borderWidth: 3,
        borderRadius: 17.5,
        width: '85%',
        paddingStart:20,
        marginVertical: '1.5%',
        minHeight: 50,
        maxHeight: 50,
        backgroundColor:'white',
    },
    inputAndroid: {
        justifyContent: 'center',
        alignContent:"center",
        alignSelf:"center",
        borderColor: colors.lightViolet,
        borderWidth: 3,
        borderRadius: 17.5,
        width: 350,
        paddingStart:20,
        marginVertical: '1.5%',
        minHeight: 50,
        maxHeight: 50,
        backgroundColor:'white',
    },
    inputAndroidContainer:{

    }, 
});

export default styles;


/* 

    container: {
        justifyContent: 'center',
        alignContent:"center",
        borderColor: color,
        borderWidth: 3,
        borderRadius: 17.5,
        width: (size == "100%") ? win.width -40 : size,
        paddingStart:20,
        marginVertical: '1.5%',
        minHeight: height,
        maxHeight: height,
        backgroundColor:'white',
    },

    errorNotification: {
        color: colors.red,
    },
    
    */