import {StyleSheet} from "react-native";
import {contentWidth} from '../../styles/globalStyles'

const styles = (fromAddScreens) => StyleSheet.create({
    container:{
        flexDirection:"row",
        width: fromAddScreens && contentWidth.large,
    },
    fromSearch:{
        
    },
    usual:{


    },
    flatlist:{
        paddingStart:20,
        width: fromAddScreens && contentWidth.large,

        alignItems: fromAddScreens && "space-around",
    }
});

export default styles;