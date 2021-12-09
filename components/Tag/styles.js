import { StyleSheet } from "react-native";
import { colors } from '../../styles/globalStyles'

const styles = StyleSheet.create({
  
    checkedContainer: {
      backgroundColor: colors.violet,
      alignSelf: 'flex-start',
      paddingVertical: 1,
      paddingHorizontal: 7,
      borderRadius:16,
    },
    notCheckedContainer:{
      backgroundColor: colors.green,
      alignSelf: 'flex-start',
      paddingVertical: 1,
      paddingHorizontal: 7,
      borderRadius:16,
    },
    text:{
      fontWeight: 'bold',
      fontSize:16,
      color: "white"
    }
  });

export default styles;