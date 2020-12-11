import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


import Header from "./src/Components/Header/index";
import Item from "./src/Components/Stories/items";
import PostItem from "./src/Components/PostItems";
import SocialStack from "./src/Routes/org-perfil.js"
//import Button from "./src/Components/AddButton/index";


export default function App() {
  return (
    <View style={styles.bloco}>
      
      <SocialStack/> 
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  adicionarpost:{
    position: "absolute",
    marginTop:750,


  }
});

/*#F0D3F0D0*/