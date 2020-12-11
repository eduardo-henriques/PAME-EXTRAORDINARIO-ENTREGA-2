import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import Header from "../../Components/Header/index" ;
import Item from "../../Components/Stories/items";
import PostItem from "../../Components/PostItems";

//import Header from "./src/Components/Header/index";
//import Item from "./src/Components/Stories/items";
//import PostItem from "./src/Components/PostItems";
//import Button from "./src/Components/AddButton/index";


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F3F2F3'/>
      <Header title='Yacloud'/>
      <Item name='Stories'/>
      <TouchableOpacity style={styles.floatButton}>
        <AntDesign name="pluscircleo" size={40} color="#f35" />
      </TouchableOpacity>
      <PostItem name='Posts'/>            
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
    marginTop:750,


  }
});

/*#F0D3F0D0*/