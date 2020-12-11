import React from 'react';
import { FlatList, StyleSheet, View,TouchableOpacity,Text,Image,Photos } from 'react-native';
import Header from "../../Components/Header/index";
import PicStories from "../../Components/Stories/items";
import Item from "../../Components/Item/index";
import Footer from "../../Components/futter/index.js";




export default function PagePerfil({route}){
    return(
        <View style = {styles.containerPage}>
            <View>
                <Text >Fluxo</Text>
            </View>
            <View>
               <Image source={require("../../assets/usuario1.png")}  />
                
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
    },
    containerNickName: {
        fontSize: 20
    },
    containerUserName:{
        fontSize: 20
    }



});


/*

 <Text style = {styles.containerNickName}> {route.params.data.nickName} </Text>
                <Text style = {styles.containerUserName}> {route.params.data.userName}</Text>
                <Image style ={styles.productPicture }
                source = {{
                    uri: route.params.data.feedPost
                }}  />

*/