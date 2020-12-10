import React from 'react';
import { StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import Posts from "../Posts/index";
import BarraInterativa from "../BarraInterativa/index";
import Photos from "../../assets/index";


export default function PostItem(){
    return(
        <View style={styles.postsContainer}>
            <ScrollView showsVerticalScrollIndicator={false} vertical={true}>
            
            <View style={styles.Post0}> 
                <Photos Imagesource={require("../../assets/usuario5.png")}>
                </Photos>
                <Text style={{fontSize:20, marginTop:10, marginLeft:-15}}> Eduardo </Text>
            </View>
            <Posts Postsource={require("../../assets/feed1.png")} Posts/>
            <View style={styles.Post1}> 
                <BarraInterativa/>
            </View>

            <View style={styles.Post0}> 
                <Photos Imagesource={require("../../assets/usuario7.png")}>
                </Photos>
                <Text style={{fontSize:20, marginTop:10, marginLeft:-15}}> Paulo </Text>
            </View>
            <Posts Postsource={require("../../assets/feed2.png")} Posts/>
            <View style={styles.Post1}> 
                
                <BarraInterativa/>
            </View>

            <View style={styles.Post0}> 
                <Photos Imagesource={require("../../assets/usuario6.png")}>
                </Photos>
                <Text style={{fontSize:20, marginTop:10, marginLeft:-15}}> Lucas </Text>
            </View>
            <Posts Postsource={require("../../assets/feed3.png")} Posts/>
            <View style={styles.Post1}> 
                
                <BarraInterativa/>
            </View>

            <View style={styles.Post0}> 
                <Photos Imagesource={require("../../assets/usuario3.png")}>
                </Photos>
                <Text style={{fontSize:20, marginTop:10, marginLeft:-15}}> Joao </Text>
            </View>    
            <Posts Postsource={require("../../assets/feed4.png")} Posts/>
            <View style={styles.Post1}> 
                
                <BarraInterativa/>
            </View>

            <View style={styles.Post0}> 
                <Photos Imagesource={require("../../assets/usuario2.png")}>
                </Photos>
                <Text style={{fontSize:20, marginTop:10, marginLeft:-15}}> Ruth </Text>
            </View>
            <Posts Postsource={require("../../assets/feed5.png")} Posts/>
            <View style={styles.Post1}> 
                
                <BarraInterativa/>
            </View>

            <View style={styles.Post0}> 
                <Photos Imagesource={require("../../assets/usuario8.png")}>
                </Photos>
                <Text style={{fontSize:20, marginTop:10, marginLeft:-15}}> Julia </Text>
            </View>
            <Posts Postsource={require("../../assets/feed6.png")} Posts/>
            <View style={styles.Post1}> 
                
                <BarraInterativa/>
            </View>

            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    postsContainer: {
        backgroundColor: "#eee",
        width: '100%',
        height: 550,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 5,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
    Post0:{
        backgroundColor:'#fff',
        width:'100%',
        height: 60,
        marginTop:5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    Post1:{
        backgroundColor: '#fff',
        width: '100%',
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 8,
        borderRadius: 5,
        display:"flex",
        flexDirection:'column',
    }
});