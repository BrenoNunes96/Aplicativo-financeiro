  import { Picker } from '@react-native-picker/picker';
  import React, { useState } from 'react';
  import { TouchableOpacity } from 'react-native';
  import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Pressable,
    Alert
  } from 'react-native';
  import Feather from 'react-native-vector-icons/Feather';

  import { adicionarDespesa, editarDespesa, buscarCep } from '../Data/Data';
  import { useNavigation } from '@react-navigation/native';

  export default function Formulario({ dados, pagina, buttonName, categoriainicial}) {
    const cepFormat = dados?.cep?.cep?.split('-').join('') || '';

    const [valor, setValor] = useState(dados?.valor || '');
    const [id, setId] = useState(dados?.id || '');
    const [categoria, setCategoria] = useState(dados?.categoria || categoriainicial);
    const [date, setDate] = useState(dados?.date || '');
    const [descricao, setDescricao] = useState(dados?.descricao || '');


 const navigation = useNavigation();

  const data = {
    valor,
    id,
    categoria,
    date,
    descricao,
  };


  function naveGastos(){

navigation.navigate('ListaGastos')




  }

  const enviarFormulario = () => {
    if (valor === '' || categoria === '' || date === '' || descricao === '') {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (pagina === 'Editar') {
      editarDespesa(dados.key, data, navigation);
    } else {
      adicionarDespesa(data);
      setValor('');
      setCategoria('');
      setDate('');
      setDescricao('');
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.inputWrapper}>
        <Feather name="dollar-sign" size={20} color="gray" style={styles.iconInside} />
        <TextInput
          style={styles.input}
          onChangeText={setValor}
          value={valor}
          placeholder="Valor"
          keyboardType="numeric"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputWrapper}>
        <Feather name="clock" size={20} color="gray" style={styles.iconInside} />
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          value={date}
          placeholder="Data"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.inputWrapper}>
        <Feather name="book" size={20} color="gray" style={styles.iconInside} />
        <TextInput
          style={styles.input}
          onChangeText={setDescricao}
          value={descricao}
          placeholder="Descrição"
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity onPress={enviarFormulario} style={styles.botao2}>
        <Text style={styles.botaoTexto}>
          {pagina === 'Editar' ? 'Salvar Alterações' : 'Cadastrar Despesa'}
        </Text>
      </TouchableOpacity>


      
      <TouchableOpacity onPress={naveGastos} style={styles.botao5}>
        <Text style={styles.botaoTexto}>
          {pagina === 'Editar' ? 'ir para despesas' : 'Despesas'}
        </Text>
      </TouchableOpacity>



    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
    backgroundColor: 'black',

  },
  
botao5:{
  marginTop: 20,
  backgroundColor: '#8A05BE',
  paddingVertical: 12,
  paddingHorizontal: 18,
  borderRadius: 10,
  alignSelf: 'center',
marginLeft:7,


},
  inputWrapper: {
    
    width: '100%',
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  iconInside: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    borderStyle:'none'
  },

  botao2: {
    marginTop: 20,
    backgroundColor: '#8A05BE',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignSelf: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }})