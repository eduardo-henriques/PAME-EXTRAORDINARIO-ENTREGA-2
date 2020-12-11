import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { AntDesign} from '@expo/vector-icons'; 
import Counter from '../Counter/index';

export default function Footer(){
    return(
        <View style={styles.container}>
            <TouchableOpacity style = {styles.addButtom}>
                <AntDesign name="home" size={35} color="#f2f" style={{marginTop:4, marginLeft:5}}/>
            </TouchableOpacity>
            <Counter/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        borderBottomLeftRadius: 14,
        width:'100%',
        height:50,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        display:'flex',
        flexDirection: "row",
        justifyContent:"flex-start",
    }
});

/*
<TouchableOpacity style = {styles.addTela}>
            <AntDesign name="botãoadd" size={40} color="black" />
        </TouchableOpacity>
*/