import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeFeed from './src/Pages/HomeFeed';
import {StyleSheet,View} from 'react-native';


export default function App(){
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#F3F2F3'/>
      <HomeFeed/>
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

