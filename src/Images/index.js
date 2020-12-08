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

    container:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo:{
        width: 45,
        height: 45,
        borderRadius: 20,
        marginBottom: 3,
        justifyContent:'center',
        alignItems:'center',
        marginLeft: 40,
    },
    userName:{
        flexDirection:'row',
        textAlign:'center',
        fontSize: 10
    }
});