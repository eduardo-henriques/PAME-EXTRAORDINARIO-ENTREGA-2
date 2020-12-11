import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';


import HomeFeed from "../Pages/HomeFeed/index";
import PagePerfil from "../Pages/PagePerfil/index"


const Stack = createStackNavigator();

export default function SocialStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="HomeFeed" component={HomeFeed} options = {{
        headerTitle: "Yacloud",
        headerStyle: {
          backgroundColor:"#fff"         
        },
        headerTitleAlign:"center",
        headerTitleStyle:{
          color:"#f35",
          fontWeight:"bold",
          
        }

      }} />


      <Stack.Screen name="PagePerfil" component={PagePerfil} options = {{
        headerTitle: "Yacloud",
        headerStyle: {
          backgroundColor:"#fff"         
        },
        headerTitleAlign:"center",
        headerTitleStyle:{
          color:"#f35",
          fontWeight:"bold",
          
        }

      }}/>
  
      
      
      
      
    </Stack.Navigator>
  );
}

//<Stack.Screen name="Home" component={HomeFeed} />
//<Stack.Screen name="perfil1" component={perfil1} />