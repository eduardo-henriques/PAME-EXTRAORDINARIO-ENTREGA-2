import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';


const Counter = () => {
  const [count, setCount] = useState(6);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={{width:100, marginTop:10, marginLeft:250, fontSize: 15, fontWeight:'bold'}}>Posts: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
      <AntDesign name="pluscircleo" size={35} color="#f2f" />
      </TouchableOpacity>
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
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    height:40,
    borderRadius: 40,
    width:40,
    marginLeft: 304,
    marginBottom: 5
  },
  countContainer: {
    alignItems: "center",
    marginLeft: 20,
    width: 80,
    height: 5

  }
});

export default Counter;