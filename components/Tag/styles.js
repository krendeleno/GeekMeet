import { StyleSheet } from "react-native";
import { colors } from '../../styles/globalStyles'

const styles = (small, checked) => StyleSheet.create({
  
container: small? {
  backgroundColor: colors.tagViolet,
  height:20,
  paddingHorizontal:7,
  borderRadius:16,
  marginEnd:2,
  justifyContent:"center",
  text:{
    fontWeight: 'bold',
    fontSize:14,
    color: "white",
  }
} : {
  height:25,
  backgroundColor: checked ? colors.violet : colors.green,
  paddingHorizontal:8,
  borderRadius:16,
  marginEnd:4,
  justifyContent:"center",
  text:{
    fontWeight: 'bold',
    fontSize:16,
    color: "white",
  }
},
});

export default styles;