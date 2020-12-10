import React from 'react';
import { StyleSheet, View,TouchableOpacity, Image} from 'react-native';

export default function CommentAdd(){
    return(
        <View style={{flexDirection:'row'}}>
               
               <TouchableOpacity>
                
                <Image
                    style={styles.comentAdd}
                    source={require("../../assets/comment.png")}/>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({       
    pageComment: {
        
    },
    comentAdd: {
        width: 35,
        height: 35,
        marginLeft: 20,
        marginTop: 10,
       
    },
        
    

});