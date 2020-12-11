import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Header from "../../Components/Header/index";
import PicStories from "../../Components/Stories/items";
import Item from "../../Components/Item/index";
import Adicionar from "../../Components/futter/index.js";
import { AntDesign } from '@expo/vector-icons'; 






export default function HomeFeed(){
    const [list, setList] = useState([
        {   
          id: 1,
          nickName: "Eduardo",
          userName: "@eduardo.henriques",
          profilePic: require("../../assets/usuario5.png"),
          feedPost: require("../../assets/feed1.png"),
          commentPost: "Cool! 🔥",
          statusPost: "Home 📌",
          nickComentator: "Tio Luiz"

        },
        {
          id: 2,
          nickName: "Paulo",
          userName: "@paulo",
          nickComentator: "Tio Ben",
          profilePic: require("../../assets/usuario7.png"),
          feedPost: require("../../assets/feed2.png"),
          statusPost: "📷 Trip",
          commentPost: "Maravilhosa paisagem! 👏"
        },
        {
          id: 3,
          nickName: "Lucas",
          userName: "@lucas.Alves",
          nickComentator: "Tia May",
          profilePic: require("../../assets/usuario6.png"),
          feedPost: require("../../assets/feed3.png"),
          commentPost: "Reflexivo 🤔",
          statusPost: "This 😳"

        },
        {
          id: 4,
          nickName: "Joao",
          userName: "@joao.pinheiro",
          nickComentator: "Tia Marjory",
          profilePic: require("../../assets/usuario3.png"),
          feedPost: require("../../assets/feed4.png"),
          commentPost: "Lindo!! 😻",
          statusPost: "Felino 👑"
        },
        {
          id: 5,
          nickName: "Ruth",
          userName: "@ruth.Fluxo",
          nickComentator: "Tio Agnaldo",
          profilePic: require("../../assets/usuario2.png"),
          feedPost: require("../../assets/feed5.png"),
          commentPost: "Incrível! 🍁",
          statusPost: "Japão! 🍂"
        },
        {
          id: 6,
          nickName: "Julia",
          userName: "@julia.Fluxo",
          nickComentator: "Tia Joana",
          profilePic: require("../../assets/usuario8.png"),
          feedPost: require("../../assets/feed6.png"),
          commentPost: "Interessante! 🤔👌",
          statusPost: "Estudando ✨"
        },
        {
          id: 7,
          nickName: "Bruno",
          userName: "@bruno.Fluxo",
          nickComentator: "Bruno",
          profilePic: require("../../assets/usuario9.png"),
          feedPost: "",
          commentPost: "Galera já ta sabendo demais 🥳",
          statusPost: "Ajudando bastante a galera em Git! 👌"
        },
      ]);
        function addPost() {
          const LastIndex = list.length - 1;
          const LastId = list[LastIndex].id;
          const newPost = {
            
            nickName: "Ruth",
            userName: "@ruth.Fluxo",
            nickComentator: "Tio Agnaldo",
            profilePic: require("../../assets/usuario2.png"),
            feedPost: "",
            commentPost: "Hello World",
            statusPost: "Trabalhando muito"
          }

          let newList = list;
          newList.push(newPost);
          setList(newList);

        }
    
    return(
        <View style={styles.container}>
          <Header title='Yacloud'/>
          <PicStories name='Stories'/>
          <FlatList
            data={list}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (<Item nickname={item.nickName} username={item.userName} nickComentator={item.nickComentator} profilePic={item.profilePic} feedPost={item.feedPost} statusPost={item.statusPost} commentPost={item.commentPost}/>)}
          />
          <Adicionar/>
          <TouchableOpacity onPress={addPost} style = {styles.addButtom}>
            <AntDesign name="pluscircleo" size={40} color="#f2f" />
          </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  addButtom: {
    alignItems: "center",
    backgroundColor: "#fff",
    height:20,
    width:100,
    marginLeft: 130,
  },

});