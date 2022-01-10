
import {StyleSheet, Dimensions} from "react-native";
const win = Dimensions.get('window');

export const fonts ={
    regular:"NotoSans",
    bold:"NotoSans-Bold"
}

export const colors = {
    green: "#B0C15E",
    deepGreen: "#759f14",
    lightGreen: "#B9C08B",
    deepViolet: "#49386C",
    lighterGreen:"#F8FBED",
    violet: "#9C8BC9",
    lightViolet: "#BEAAF4",
    lighterViolet: "#ECE6FC",
    tagViolet: "#CEC2ED",
    textViolet:"#49386C",
    red: "#B91C1C",
    darkRed:"#A44646",
    grey: "#DADADA",
    btnGrey:"#E5E5E5"
}

export const globalStyles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white",
        paddingBottom:30
    },

    scrollView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white",
    },

    feedContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:"white",
        paddingBottom:30
    },

    anotherContainer: {
        flex: 1,
        backgroundColor:"white"
    },
    infoUserBottomContainer:{
        flexDirection: 'row', 
        width:100
    },

    containerNewFeed:{
        flex: 1,
    },

    img: {
        width: 200,
        height: 200
    },

    tinyImg: {
        width: 60,
        height: 60
    },

    newButton: {
        flex: 1,
        backgroundColor: colors.violet,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width: win.width -40,
        maxHeight: 50,
        marginTop: 10,
        borderRadius: 16,
        minHeight: 50

    },

    newTextStyle:{
        alignSelf:"center",
        fontSize:16,
        marginVertical:12,
        fontFamily: fonts.bold,
        color:"white"
    },

    noEventsStyle:{
        textAlign:"center",
        alignSelf:"center",
        fontSize:16,
        marginVertical:12,
        fontFamily: fonts.regular,
        color:colors.textViolet,
        /* lineHeight:15, */


    }
});



export const contentWidth = {
    superSmall: "10%",
    small: "75%",
    medium: "80%",
    large: "85%",
    full: "100%", 
    third: "33%",
    one: "65%",
    
}


