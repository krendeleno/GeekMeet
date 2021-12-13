import { StyleSheet } from "react-native";
import { colors, fonts } from '../../styles/globalStyles'

const styles = (small, checked,fromAddScreens) => StyleSheet.create({
  container:{
    backgroundColor: 
      small ? colors.tagViolet : (checked ? colors.violet : colors.green),
    height: small ? 20 : 25,
    paddingHorizontal: small ? 7 : 8,
    borderRadius:16,
    marginEnd: small ? 2 : 4,
    marginBottom:fromAddScreens && 5,
    alignSelf: fromAddScreens && "center",
    justifyContent:"center",
    text:{
      fontFamily: fonts.bold,
      fontSize: small ? 14 : 16,
      color: "white",
      marginBottom:1.5
    }
  }
});

export default styles;