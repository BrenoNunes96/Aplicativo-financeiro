import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { excluirDespesa, listarDespesa } from '../Data/Data';

export default function Despesas() {
  const [despesa, setDespesa] = useState([]);
  const [despesaCompleta, setDespesaCompleta] = useState([]);
  const [total, setTotal] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const despesinhas = await listarDespesa();
      setDespesa(despesinhas);
      setDespesaCompleta(despesinhas);
    };
    fetchData();
  }, []);

  function filtragem(categoriaSelecionada) {
    const filtradas = despesaCompleta.filter(item => item.categoria === categoriaSelecionada);
    setDespesa(filtradas);
  }

  function resetarFiltro() {
    setDespesa(despesaCompleta);
  }

  const handleDelete = (key) => {
    excluirDespesa(key);
    setDespesa(despesa.filter(d => d.key !== key));
  };

  const navegaEditar = (item) => {
    navigation.navigate("Editar", { item });
  };

 

  const Resumodogastos = () => {
    let soma = 0;
    for (let i = 0; i < despesa.length; i++) {
      soma += Number(despesa[i].valor);
    }
    setTotal(soma); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {despesa.map(item => (
        <View style={styles.containerUsuario} key={item.key}>
          <Text style={styles.titulo}>Valor: <Text style={styles.texto}>{item.valor}</Text></Text>
          <Text style={styles.titulo}>Categoria: <Text style={styles.texto}>{item.categoria}</Text></Text>
          <Text style={styles.titulo}>Data: <Text style={styles.texto}>{item.date}</Text></Text>
          <Text style={styles.titulo}>Descrição: <Text style={styles.texto}>{item.descricao}</Text></Text>
         

          <View style={styles.botoesAcoes}>
            <TouchableOpacity onPress={() => handleDelete(item.key)} style={styles.botao2}>
              <Text style={styles.botaoTexto}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navegaEditar(item)} style={styles.botao2}>
              <Text style={styles.botaoTexto}>Editar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

      <View style={styles.botoesFiltro}>
        <TouchableOpacity onPress={() => filtragem("compras")} style={styles.botaoFiltro}>
          <Text style={styles.botaoTexto1}>Compras</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => filtragem("faturas")} style={styles.botaoFiltro}>
          <Text style={styles.botaoTexto1}>Faturas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetarFiltro} style={styles.botaoFiltro}>
          <Text style={styles.botaoTexto1}>Mostrar Tudo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Resumodogastos} style={styles.botaoFiltro}>
          <Text style={styles.botaoTexto1}>Total gastos</Text>
        </TouchableOpacity>
        <View style={styles.botaoFiltro}>
          <Text style={styles.gastos}>{total}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor:'black'

  },
  containerUsuario: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 3,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5e2590',
    marginBottom: 4,
  },
  texto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 2,
  },
  botoesAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    flexWrap: 'wrap',
  },
  botao2: {
    backgroundColor: '#8A05BE',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    margin: 6,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  botoesFiltro: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
    gap: 8,
  },
  botaoFiltro: {
    backgroundColor: '#8A05BE',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    margin: 6,
  },
  botaoTexto1: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gastos: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
