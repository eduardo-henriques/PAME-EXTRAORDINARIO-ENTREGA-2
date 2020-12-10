import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import Counter from "../Counter/index";

export default function Header({title}){

    return(
        <View style={styles.container}>
        <TouchableOpacity style = {styles.addButtom}>
            <AntDesign name="pluscircleo" size={40} color="black" />
        </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#FF0000f",
        width:'100%',
        height:50,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom:50 ,
    },
    
});
