import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../Pages/perfis/perfil1.js"

const Stack = createStackNavigator();

export default function SocialStack () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>
  );
}