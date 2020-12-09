import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Posts({Postsource}){
    return(
        <View style={StyleSheet.container}>
            <Image
                style={styles.tinyLogo}
                source={Postsource}/>
        </View>
    );
}

const styles = StyleSheet.create({

    tinyLogo:{
        width: 400,
        height: 400,
    }
});






