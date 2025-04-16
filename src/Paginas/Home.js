import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

export default function Home() {
  const navigation = useNavigation();

  function navegaLista() {
    navigation.navigate("Compras");
  }
  function navegFatura() {
    navigation.navigate("Fatura");
  }

  return (
    <View style={styles.container}>
   
      <View style={styles.row}>
     


        <TouchableOpacity onPress={navegFatura} style={styles.botao3}>
          <Feather name="dollar-sign" size={80} color={'black'} style={styles.icone2} />
        </TouchableOpacity>

        <TouchableOpacity onPress={navegaLista} style={styles.botao2}>
          <Feather name="shopping-bag" size={80} color={'black'} style={styles.icone1} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a tela toda
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 16,
  },

  row: {
    flexDirection: 'row',
    gap: 20, // se não funcionar, use marginRight no primeiro botão
  },


  botao4:{
    marginBottom:-90,
 marginRight:160,
    width: 120,
    height:200,
    backgroundColor: '#8A05BE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,




  },

  botao3: {
    marginTop:200,
    marginLeft:180,
    width: 160,
    height:500,
    backgroundColor: '#8A05BE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  botao2: {marginRight:180,
    width: 160,
    height:500,
    backgroundColor: '#8A05BE',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  icone1: {
    marginBottom: 0,
  },
  icone2: {
    marginBottom: 0,
  },
});
