import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

export default function BarraInterativa(){
    return(
        <View style={StyleSheet.BarraContainer}>
            <Image
                style={styles.gostarLogo}
                source={require("../Images/heart.png")}/>
            <Image
                style={styles.comentarLogo}
                source={require("../Images/comment.png")}/>
            <Image
                style={styles.origamiLogo}
                source={require("../Images/paper-plane.png")}/>
        </View>
    );
}
const styles = StyleSheet.create({
    BarraContainer:{
        width: '100%',
        height: 30,
        display: 'flex',
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:"center",
    },
    gostarLogo:{
        width: 20,
        height: 20,
        marginLeft: 3,
    },
    comentarLogo:{
        width: 20,
        height: 20,
        marginLeft: 3,
    },
    origamiLogo:{
        width: 20,
        height: 20,
        marginLeft: 3
    }

});