import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeFeed from './src/Pages/HomeFeed';
import {StyleSheet,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import SocialStack from './src/Routes/social.routes';

//Comentados pois estavam dando erro.

export default function App(){
  return (
    <NavigationContainer>
      
        <StatusBar backgroundColor='#F3F2F3'/>
        <SocialStack/>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

