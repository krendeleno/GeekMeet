import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Text, StyleSheet } from 'react-native';


const App = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');


    const renderItem = ({ item }) => (
        <Text>{item.title}</Text>
    );

    const onPress = () => {
        setCount(count + 1);
    }

  return (
      <View style={styles.container.container2}>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      container2: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black'
      }
  },
    img: {
        width: 300,
        height: 300,
        borderRadius: 10
    }
});

export default App;