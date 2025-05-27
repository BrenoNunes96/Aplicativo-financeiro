import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';  // Importando useRoute para acessar os parâmetros da navegação
import Formulario from '../Componentes/Formulario';
import { View, Text } from 'react-native';

function Editar() {
  // Acessando os parâmetros da navegação
  const route = useRoute();
  const { item } = route.params;  

    return (
      <View>
       
        <Formulario
      pagina="Editar"
      dados={item} />
      </View>

    
  );
    


  
}

export default Editar;
