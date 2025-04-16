import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Paginas/Home.js';
import ListaGastos from '../Paginas/ListaGastos.js';
import Editar from '../Paginas/Editar.js';
import Resumodogastos from '../Paginas/Resumodogastos.js';
import Compras from '../Paginas/Compras.js'
import Fatura from '../Paginas/Fatura.js'
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home}
      options={{headerShown:false}}
      
      />
      <Stack.Screen name="ListaGastos" component={ListaGastos} />

      <Stack.Screen name='Compras' component={Compras}/>
      <Stack.Screen name='Fatura' component={Fatura}/>

      <Stack.Screen name ='Editar' component={Editar} />

      <Stack.Screen name ='ResumodoGastos' component={Resumodogastos}/>

       
    </Stack.Navigator>
  );
}
