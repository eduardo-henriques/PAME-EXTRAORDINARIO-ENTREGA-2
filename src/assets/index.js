import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Photos({Imagesource, Username}){
    return(
        <View style={StyleSheet.container}>
            <Image
                style={styles.tinyLogo}
                source={Imagesource}/>
            <Text
                style={styles.userName}>{Username}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    tinyLogo:{
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#f1f',
        marginBottom: 1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 25,
        marginRight: 25,
    },
    userName:{
        flexDirection:'row',
        textAlign:'center',
        fontSize: 12,
    }
});