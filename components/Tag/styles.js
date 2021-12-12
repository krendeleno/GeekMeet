import { StyleSheet } from "react-native";
import { colors } from '../../styles/globalStyles'

const styles = StyleSheet.create({
  
unChangable:{
  backgroundColor:colors.tagViolet,
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
},
container:{
  height:25,
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
    checked: {
      backgroundColor: colors.violet,
    },
    notChecked:{
      backgroundColor: colors.green,
  }}
  );

export default styles;