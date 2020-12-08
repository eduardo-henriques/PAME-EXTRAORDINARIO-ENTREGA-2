import React from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';
import Photos from "../Images/index";

export default function Item(){
    return(
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Photos Imagesource={require("../Images/usuario.png")} Username="Eduardo" Photos/>
            <Photos Imagesource={require("../Images/jojovasci.jpg")} Username="Paulo" Photos/>
            <Photos Imagesource={require("../Images/heheh.jpeg")} Username="Lucas" Photos/>
            <Photos Imagesource={require("../Images/usuario.png")} Username="Joao" Photos/>
            <Photos Imagesource={require("../Images/usuario.png")} Username ="Ruth" Photos/>
            <Photos Imagesource={require("../Images/usuario.png")} Username="Julia" Photos/>
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
        alignItems:"center",
        justifyContent:'center',
        display:'flex',
        flexDirection: "column"
    }
});

