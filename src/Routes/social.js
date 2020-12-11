import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeFeed from "../Pages/HomeFeed/index.js";

const Stack = createStackNavigator();

function SocialStack() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="Home" component={HomeFeed} />
      
    </Stack.Navigator>
  );
}