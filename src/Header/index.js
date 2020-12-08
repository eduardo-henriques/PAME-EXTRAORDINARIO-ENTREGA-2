import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default function Header({title}){
    return(
        <View style={styles.container}>
            <Text style={styles.headerTitle}>{title}</Text>
            <Image
                style={styles.headerLogo}
                source={require("../Images/HeaderLogo.png")}/>
            <Image
                style={styles.addLogo}
                source={require("../Images/add.png")}/>
            <Image
                style={styles.headerEncaminhar}
                source={require("../Images/HeaderEncaminhar.png")}/>
        </View>
    );
}

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
        marginLeft: -173,
    },
    headerTitle:{
        color: "#f35",
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginRight: -30,
        marginRight: 50,
        marginLeft: 40,
    },
    addLogo:{
        width: 28,
        height: 28,
        borderRadius: 10,
        justifyContent: "flex-start",
        marginBottom: 10,
        marginLeft: 170,
    },
    headerEncaminhar: {
        width:35,
        height: 35,
        borderRadius: 20,
        marginLeft: 20,
        justifyContent: 'flex-start',
        marginBottom: 5,
        
    },
});
