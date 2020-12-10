import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Counter from "../Counter/index";

export default function Header({title}){

    return(
        <View style={styles.container}>
            <Text style={styles.headerTitle}>{title}</Text>
            <Image
                style={styles.headerLogo}
                source={require("../../assets/HeaderLogo.png")}/>
            <Counter/> 
            <Image
                style={styles.addLogo}
                source={require("../../assets/add.png")}/>
            <Image
                style={styles.headerEncaminhar}
                source={require("../../assets/HeaderEncaminhar.png")}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        width:'100%',
        height:50,
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 20,
    },
    headerLogo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 100,
        marginBottom: 5,
        marginLeft: -170,
    },
    headerTitle:{
        color: "#f35",
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginRight: 48,
        marginLeft: 50,
    },
    addLogo:{
        width: 28,
        height: 28,
        borderRadius: 10,
        justifyContent: "flex-start",
        marginBottom: 10,
        marginLeft: 120,
    },
    headerEncaminhar: {
        width:35,
        height: 35,
        borderRadius: 20,
        marginLeft: 15,
        justifyContent: 'flex-start',
        marginBottom: 5,
        marginRight: 5
    }
});
