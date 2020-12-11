import React from 'react';
import { FlatList, StyleSheet, View,TouchableOpacity,Text } from 'react-native';
import Header from "../../Components/Header/index";
import PicStories from "../../Components/Stories/items";
import Item from "../../Components/Item/index";
import Footer from "../../Components/futter/index.js";


export default function PagePerfil(){
    return(
        <View style = {styles.containerPage}>
            
            <View>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    containerPage: {
        backgroundColor:"#fff",
        borderBottomLeftRadius: 14,
        width:'100%',
        height:'100%',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        display:'flex',
        flexDirection: "column",
        marginTop:10,
    }
});
