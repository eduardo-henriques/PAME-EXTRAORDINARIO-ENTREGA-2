import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Button(){
    return (
      <View style={styles.container}>        
        <TouchableOpacity style={styles.floatButton}>
          <AntDesign name="pluscircleo" size={40} color="#f35" />
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  floatButton:{
    position: "absolute",
    marginTop:700,


  }
});