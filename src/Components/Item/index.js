import React from 'react';
import { StyleSheet, View, Image, Text} from 'react-native';
import BarraInterativa from '../BarraInterativa';




export default function Item({nickname, username, profilePic, feedPost, commentPost, nickComentator,statusPost}){
    
    function renderImage(){
        if(feedPost) {
            return(
                <Image style={styles.feedPhoto} source={feedPost}/>
            );
        }
        else{
            return null;
        }
    }
    
    return(
        <View style={styles.mainContainer}>
            <View style={styles.upperContainer}>
                <View>
                    <Image style={styles.profilePhoto} source={profilePic}/>
                </View>
                <View style={{flexDirection:'column', width:'100%'}}>
                    <Text style={styles.nameNick}>{nickname}</Text>
                    <Text style={styles.nameUser}>{username}</Text>
                </View>
                
            </View>

            {renderImage()}

            <View style={styles.bottomContainer}>
                
                <View style={{flexDirection:'row', marginTop:5, borderBottomWidth:1, borderBottomColor:'#eee'}}>
                    <Text style={styles.comments}> {nickname}: </Text>
                    <Text style={{fontSize:15}}> {statusPost} </Text>
                </View>
                <BarraInterativa/>
                <View style={{flexDirection:'row', marginTop:5}}>
                    <Text style={{fontSize:15, fontWeight:"bold", color:'grey'}}></Text>
                    <Text style={styles.comments}> {nickComentator}: </Text>
                    <Text style={{fontSize:15}}> {commentPost} </Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
    mainContainer:{
        backgroundColor: "#fff",
        width: '88%',
        alignItems: 'center',
        marginBottom: 5,
        marginRight: 20,
        marginLeft: 5
    },

    upperContainer:{
        backgroundColor:'#eee',
        width:'100%',
        height: 60,
        marginTop:10,
        borderTopWidth:1,
        borderTopColor:'#eee',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
    },

    profilePhoto:{
        height: 50,
        width: 50,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#f2f',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 15
    },

    nameNick:{
        fontSize: 20, 
        marginTop: 1, 
        marginRight: 60,
        fontWeight:'bold'
    },

    nameUser:{
        fontSize: 15,
        marginTop: 1,
        fontWeight:'bold'

    },

    feedPhoto:{
        width: "100%",
        height: 400,
        marginLeft: 5,
        marginRight: 5
        
    },

    comments:{
        fontSize: 15,
        fontWeight: 'bold',
    },

    bottomContainer:{
        backgroundColor: '#eee',
        width: '100%',
        paddingBottom:3,
        marginBottom:5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        borderBottomLeftRadius:5,
        borderBottomRightRadius: 5,
        display:"flex",
        flexDirection:'column',
    }
});