import {StyleSheet} from "react-native";
import {colors} from '../../styles/globalStyles'

const styles = StyleSheet.create({
    container: {
        /* flex:1, */
        flexDirection:"row",
        justifyContent: 'center',
        paddingVertical:15
        
    },
    eventTitle:{
        color:"red"

    },
    eventDate:{
        color:"orange"

    },
    eventTime:{
        color:"yellow"

    },
    eventPlace:{
        color:"green"

    },
    eventParticipans:{
        color:"blue"

    },
    eventTag:{
        color:"purple"

    },
    img:{
        width:100,
        height:100,
        borderRadius:16
    },
    seats:{
        backgroundColor: colors.green,
        alignSelf: 'flex-start',
        paddingVertical: 1,
        paddingHorizontal: 3,
        borderRadius:4,
        text:{   
            color:"white",
            fontWeight:"bold"
        }
    },
});

export default styles;