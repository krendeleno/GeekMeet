import { StyleSheet } from "react-native";
import { colors } from '../../styles/globalStyles'

const styles = StyleSheet.create({
  
    checkedContainer: {
      backgroundColor: colors.violet,
      
      paddingVertical: 1,
      paddingHorizontal: 7,
      borderRadius:16,
      alignSelf:"center",
      justifyContent:"center"
    },
    notCheckedContainer:{
      backgroundColor: colors.green,
      
      paddingVertical: 1,
      paddingHorizontal: 7,
      borderRadius:16,
      alignSelf:"center",
      justifyContent:"center"
    },
    text:{
      fontWeight: 'bold',
      fontSize:16,
      color: "white",
      
    }
  });

export default styles;