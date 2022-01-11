
import {StyleSheet} from 'react-native';
import {contentWidth, fonts} from '../../../styles/globalStyles'

const styles = StyleSheet.create({
    next:{
        backgroundColor: '#EBE1FF',
        flex: 1,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width: contentWidth.large,
        maxHeight: 50,
        
        borderRadius: 16,
        minHeight: 50,
        text:{
            
            color:"#49386C",
            fontFamily: fonts.regular,
            
        }
    },

    skip:{
        color:"black",
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width: contentWidth.large,
        marginTop:10,
        marginBottom:18,
        
        borderRadius: 16,
        
        text:{
            color:"#9C8BC9",
            textDecorationLine: "underline",
            fontFamily: fonts.regular,
        }
    },

    done:{
        backgroundColor: '#9C8BC9',
        flex: 1,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width: contentWidth.large,
        maxHeight: 50,
        
        borderRadius: 16,
        minHeight: 50,
        text:{
            
            color:"white",
            fontFamily: fonts.regular,
        }
    },

    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"white"
    },

    image: {
      width: 320,
      height: 320,
      resizeMode:"contain",
      marginBottom: 50,
      marginTop:50
    },

    text: {
      color: '#9C8BC9',
      textAlign: 'center',
      fontFamily: fonts.regular,
      marginHorizontal: 10
    },

    title: {
      fontSize: 22,
      fontWeight:"bold",
      fontFamily: fonts.bold,
      color: '#6E53AE',
      textAlign: 'center',
      marginBottom:30
    },

  });

export default styles
