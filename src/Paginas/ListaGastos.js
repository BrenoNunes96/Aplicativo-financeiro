import React from "react";
import { View,Text,StyleSheet,Button, ScrollView } from "react-native";
import ListaDespesas from '../Componentes/ListaDespesas'


export default function ListaGastos (){

return(

<ScrollView>

<View>
<Text style={styles.titulo}>
    Lista de despessas
</Text>

<ListaDespesas/>    



</View>


</ScrollView>

)


}


const styles= StyleSheet.create({

container:{
    flex:1,
},

titulo:{

fontSize:26,
marginVertical:20,
fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'black'


}








})