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

export default function Formulario({ dados, pagina, buttonName }) {
  const cepFormat = dados?.cep?.cep?.split('-').join('') || '';

  const [valor, setValor] = useState(dados?.valor || '');
  const [id, setId] = useState(dados?.id || '');
  const [categoria, setCategoria] = useState(dados?.categoria || '');
  const [date, setDate] = useState(dados?.date || '');
  const [descricao, setDescricao] = useState(dados?.descricao || '');

  const [cep, setCep] = useState(dados?.cep || {});
  const [cepInput, setCepInput] = useState(cepFormat);
  const [logradouro, setLogradouro] = useState(dados?.logradouro || '');
  const [bairro, setBairro] = useState(dados?.bairro || '');

  const navigation = useNavigation();
  const data = {
    valor,
    id,
    categoria,
    date,
    descricao,
    cep,
    logradouro,
    bairro
  };
  
  const enviarFormulario = () => {
    if(valor === ''|| categoria ===''|| date ===''||descricao ===''|| cepInput ==='') {
      alert('Erro', 'Preencha todos os campos!');
      return;
    }

    if (pagina === 'Editar') {
      editarDespesa(dados.key, data,navigation);
   
    } else {
      adicionarDespesa(data);
      // limpar os campos
      setValor('');
      
      setCategoria('');
      setDate('');
      setDescricao('');
      setCepInput('');
      setLogradouro('');
      setBairro('');
    }
  };

  const handleCep = async (valor) => {
    if (valor.length < 8) {
      alert("CEP inválido");
      return;
    }

    const response = await buscarCep(valor);
    if (!response || response.erro) {
      alert("CEP não encontrado");
      return;
    }

    setCep(response);
    setLogradouro(response.logradouro);
    setBairro(response.bairro);
  };

  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <Feather name="dollar-sign" size={20} color={'black'} />
        <TextInput
          style={styles.input}
          onChangeText={setValor}
          placeholder={pagina === 'Editar' ? dados.valor : 'Valor'}
          keyboardType="numeric"
        />
      </View>

   



     

      <View style={styles.inputContainer}>
        <Feather name="clock" size={20} color={'black'} />
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          placeholder={pagina === 'Editar' ? dados.date : 'Data'}
        />
      </View>

      <View style={styles.inputContainer}>
        <Feather name="book" size={20} color={'black'} />
        <TextInput
          style={styles.input}
          onChangeText={setDescricao}
          placeholder={pagina === 'Editar' ? dados.descricao : 'Descrição'}
        />
      </View>

      <View>
        <Text>Categoria</Text>
        <Picker selectedValue={categoria} onValueChange={(valor) => setCategoria(valor)}>
          <Picker.Item label="Selecione uma categoria" value="" />
          <Picker.Item label="Compras" value="compras" />
          <Picker.Item label="Faturas" value="faturas" />
        </Picker>
      </View>

      <TouchableOpacity onPress={enviarFormulario} style={styles.botao2}>
  <Text style={styles.botaoTexto}>{buttonName}</Text>
</TouchableOpacity>

           
    
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
    borderWidth: 2,
    margin: 20,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    backgroundColor: 'white',
  },
  buttonPesquisaCep: {
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#eee',
  },
  botao2: {
    width:100,
    marginTop:20,
    backgroundColor: '#8A05BE',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    marginHorizontal: 6,
  },  botaoTexto: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
