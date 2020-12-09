import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./src/Components/Header/index";
import Item from "./src/Components/Stories/items";
import PostItem from "./src/Components/PostItems";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F3F2F3'/>
      <Header title='Yacloud'/>
      <Item name='Stories'/>
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
});

/*#F0D3F0D0*/