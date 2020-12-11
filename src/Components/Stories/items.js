import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Photos from "../../assets/index";

export default function Item(){
    return(
        <View style={styles.contaner2}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <Photos Imagesource={require("../../assets/usuario5.png")} Username="Eduardo" Photos/>
            <Photos Imagesource={require("../../assets/usuario7.png")} Username="Paulo" Photos/>
            <Photos Imagesource={require("../../assets/usuario6.png")} Username="Lucas" Photos/>
            <Photos Imagesource={require("../../assets/usuario3.png")} Username="Joao" Photos/>
            <Photos Imagesource={require("../../assets/usuario2.png")} Username ="Ruth" Photos/>
            <Photos Imagesource={require("../../assets/usuario8.png")} Username="Julia" Photos/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    contaner2: {
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

