
import { Button,Text,View } from "react-native-web";
import { listarDespesa } from "../Data/Data";
 export default function  ResumoGasto(){
    const [despesa, setDespesa] = useState([]);


    

return(
    <View>
  {despesa.map((item) => (
    <View key={item.key} style={styles.containerUsuario}>
      <Text style={styles.titulo}>Valor: <Text style={styles.texto}>{item.valor}</Text></Text>
      <Text style={styles.titulo}>Categoria: <Text style={styles.texto}>{item.categoria}</Text></Text>
      <Text style={styles.titulo}>ID: <Text style={styles.texto}>{item.id}</Text></Text>
      <Text style={styles.titulo}>Data: <Text style={styles.texto}>{item.date}</Text></Text>
      <Text style={styles.titulo}>Descrição: <Text style={styles.texto}>{item.descricao}</Text></Text>
      <Text style={styles.titulo}>Logradouro: <Text style={styles.texto}>{item.cep?.logradouro || 'N/A'}</Text></Text>
      <Text style={styles.titulo}>Bairro: <Text style={styles.texto}>{item.cep?.bairro || 'N/A'}</Text></Text>

      { <Button title="Filtrar" onPress={filtragem} /> }
    </View>
  ))}
</View>

            
)
        
        
        
        
        
        }