import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

export default function BarraInterativa(){
    return(
        <View style={{flexDirection:'row', borderTopWidth:1, borderTopColor:'grey', borderBottomWidth:1, borderBottomColor:'grey', marginTop:5, paddingBottom:8}}>
            <Image
                style={styles.gostarLogo}
                source={require("../../assets/heart.png")}/>
            <Image
                style={styles.comentarLogo}
                source={require("../../assets/comment.png")}/>
            <Image
                style={styles.origamiLogo}
                source={require("../../assets/paper-plane.png")}/>
        </View>
    );
}
const styles = StyleSheet.create({
    BarraContainer: {
        height: 30,
        width: 80,
    },
    gostarLogo:{
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