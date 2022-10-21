import React from 'react';

import Login from './Login';
import Home from './Home';
import Pedidos from './Pedidos';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navegacao(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Pedidos' component={Pedidos} />
    </Stack.Navigator>
  )
}