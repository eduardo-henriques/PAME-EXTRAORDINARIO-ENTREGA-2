import React, { useState } from 'react';
import { StyleSheet, View,TouchableOpacity, Image, Button, ScrollView,Text,} from 'react-native';
import Constants from 'expo-constants';



  

export default function Like(){

    
    return(
        <View style={{flexDirection:'row'}}>
            
            <TouchableOpacity style= {styles.Like}>       
                <Image
                    style={styles.gostarLogo}
                    source={require("../../assets/heart.png")}/>
            </TouchableOpacity>
            
            
        </View>
    );
}
const styles = StyleSheet.create({       
    Like: {
        
    },
    gostarLogo: {
        width: 35,
        height: 35,
        marginLeft: 3,
        marginTop: 10,
       
    },
        
    

});

/*

const Square = () => {
        const sqStyle = {
          width: 50,
          height: 50,
          backgroundColor: randomHexColor(),
        };
        return <View style={sqStyle} />;
      };
      const [squares, setSquares] = useState([Square(), Square(), Square()]);


*/