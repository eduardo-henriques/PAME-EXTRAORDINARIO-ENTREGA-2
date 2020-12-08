import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Photos from "../Images/index";

export default function Item(){
    return(
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Photos Imagesource={require("../Images/usuario5.png")} Username="Eduardo" Photos/>
            <Photos Imagesource={require("../Images/usuario7.png")} Username="Paulo" Photos/>
            <Photos Imagesource={require("../Images/usuario6.png")} Username="Lucas" Photos/>
            <Photos Imagesource={require("../Images/usuario3.png")} Username="Joao" Photos/>
            <Photos Imagesource={require("../Images/usuario2.png")} Username ="Ruth" Photos/>
            <Photos Imagesource={require("../Images/usuario8.png")} Username="Julia" Photos/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        borderBottomLeftRadius: 14,
        width:'100%',
        height:70,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        display:'flex',
        flexDirection: "column"
    }
});

