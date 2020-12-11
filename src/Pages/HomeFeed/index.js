import React, {useState} from 'react';
import { FlatList, StyleSheet, View,TouchableOpacity} from 'react-native';
import Header from "../../Components/Header/index";
import PicStories from "../../Components/Stories/items";
import Item from "../../Components/Item/index";
import Footer from "../../Components/futter/index.js";
import { AntDesign } from '@expo/vector-icons';


export default function HomeFeed({navegation}){
  const [list,setList]= useState([
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

  function addItem(){
    const lastIndex = list.length - 1;

    const lastId = list[lastIndex].id;

    const newItem = {
      id: lastId + 1,
      nickName: "Eduardo",
      userName: "@eduardo.henriques",
      nickComentator: "Bruno",
      profilePic: require("../../assets/usuario5.png"),
      feedPost: "",
      commentPost: "Se apareceu é porque deu bom",
      statusPost: "👌"
    };

    let newList = list;

    newList.push(newItem);
  }

    return(
      <View style={styles.containerHome}>
      
      <PicStories name='Stories'/>
      <FlatList
          inverted={true}
          data={list}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (<Item nickname={item.nickName} username={item.userName} nickComentator={item.nickComentator} profilePic={item.profilePic} feedPost={item.feedPost} statusPost={item.statusPost} commentPost={item.commentPost}/>)}
      />
      <View style={{flexDirection:'row'}}>
        <Footer/>
        <TouchableOpacity style = {styles.addButtom} onPress={addItem}>
        <AntDesign name="pluscircleo" size={35} color="#f2f"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  addButtom:{
    marginRight: 65,
    marginLeft: -20,
    marginTop: 5
  }
});

/*

 <View style={styles.container}>
          
          <PicStories name='Stories'/>
          <FlatList
            data={list}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (<Item nickname={item.nickName} username={item.userName} nickComentator={item.nickComentator} profilePic={item.profilePic} feedPost={item.feedPost} statusPost={item.statusPost} commentPost={item.commentPost}/>)}
          />
          <Footer/>
          
        </View>

*/
