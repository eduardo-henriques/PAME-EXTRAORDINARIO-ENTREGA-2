import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Photos from "../../assets/index";

export default function Adicionar(){
    return(
        <View style={styles.container}>
            
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
        flexDirection: "column"
    }
});

/*
<TouchableOpacity style = {styles.addTela}>
            <AntDesign name="botãoadd" size={40} color="black" />
        </TouchableOpacity>
*/