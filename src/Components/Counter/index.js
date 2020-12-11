import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {addPost} from "../../Pages/HomeFeed/index"
import { AntDesign } from '@expo/vector-icons'; 

const Counter = () => {
  const [count, setCount] = useState(6);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Posts: {count}</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: 200,
    height: 50
  },
  
  countContainer: {
    alignItems: "center",
    marginLeft: 20,
    width: 80,
    height: 5

  }
});

export default Counter;