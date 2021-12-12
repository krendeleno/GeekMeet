import {StyleSheet} from "react-native";
import { fonts } from "../../styles/globalStyles";

const styles = StyleSheet.create({
    container:{
        
    },
    eventTitle:{
        color:"#49386C",
        fontWeight:"bold",
        fontSize:16,
        fontFamily:fonts.bold

    },
    eventDate:{
        color:"#2D2244",
        fontSize:14,
        fontWeight:"400",
        fontFamily:fonts.regular

    },
    eventTime:{
        color:"#2D2244",
        fontSize:14,
        fontWeight:"400",
        fontFamily:fonts.regular

    },
    eventPlace:{
        color:"#2D2244",
        fontSize:14,
        fontWeight:"400",
        fontFamily:fonts.regular

    },
});

export default styles;