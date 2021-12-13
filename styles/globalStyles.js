import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"white"
    },
    anotherContainer: {
        flex: 1,
        backgroundColor:"white"
    },
    img: {
        width: 200,
        height: 200
    },
    tinyImg: {
        width: 60,
        height: 60
    },
    noEventsStyle:{
        alignSelf:"center",
        fontSize:16,
        marginVertical:12
    }
});

export const colors = {
    green: "#B0C15E",
    lightGreen: "#B9C08B",
    deepViolet: "#49386C",
    violet: "#9C8BC9",
    lightViolet: "#BEAAF4",
    lighterViolet: "#ECE6FC",
    tagViolet: "#CEC2ED",
    red: "#B91C1C",
}

export const contentWidth = {
    small: "75%",
    medium: "80%",
    large: "85%",
}