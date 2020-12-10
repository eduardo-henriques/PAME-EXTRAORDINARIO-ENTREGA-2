import React from 'react';
import { StyleSheet, View,TouchableOpacity, Image} from 'react-native';

import Like from "../Like/index"
import addComment from "../coment/index"

export default function BarraInterativa(){
    return(
        <View style={{flexDirection:'row'}}>
            <Like name='Like'/>          
               
            <TouchableOpacity>
                
                <Image
                    style={styles.comentarLogo}
                    source={require("../../assets/comment.png")}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    style={styles.origamiLogo}
                    source={require("../../assets/paper-plane.png")}/>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    BarraContainer: {
        height: 30,
        width: 80,
    },
    
    Like: {
        
    },
    gostarLogo: {
        width: 35,
        height: 35,
        marginLeft: 3,
        marginTop: 10,
       
    },
    
    
    comentarLogo:{
        width: 35,
        height: 35,
        marginLeft: 20,
        marginTop: 10,
    },
    origamiLogo:{
        width: 35,
        height: 35,
        marginLeft: 265,
        marginTop: 10
    }

});