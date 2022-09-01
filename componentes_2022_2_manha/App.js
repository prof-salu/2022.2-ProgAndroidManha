import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, ScrollView, Button} from 'react-native';

export default function App(){
  //Area JavaScript
  //Hook
  const[nome, setNome] = useState('');
  const[idade, setIdade] = useState('');

  const disciplina = 'Desenvolvimento Mobile em Android';
  //Comentario JS
  return(
    <ScrollView style={styles.container}>
      <Text style={styles.textoOlaMundo}>
        {/*Comentario JSX*/}
        Olá mundo!
      </Text>

      <Text style={styles.textoMensagem}>{'\n'}Bem vindo a disciplina de {disciplina}</Text>
      <Image 
      style={styles.imagem} 
      source={{uri:'https://conceito.de/wp-content/uploads/2022/04/icon-1971128_1280.png'}} />
      
      <Image 
        style={styles.imagemOne} 
        source={require('/imagens/onepunch.jpg')} />   

      <TextInput 
        style={styles.campoInput}
        placeholder='Seu nome' 
        onChangeText={setNome}/>   

      <TextInput 
        style={styles.campoInput}
        placeholder='Sua idade' 
        keyboardType='numeric'
        onChangeText={setIdade}/>

      <Button
        title='Clique aqui'
        color='red'
        onPress={() => alert('Nome: ' + nome + '\nIdade: ' + idade)} />
      
    </ScrollView>

    
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    padding: 20,
  }, 
  textoOlaMundo: {
    fontSize: 25,
    color: 'orange',
    fontStyle: 'italic', 
    alignSelf: 'center'
  },
  textoMensagem: {
    fontSize: 16,
    color: '#FF12AB',
    fontWeight: 'bold'
  }, 
  imagem: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  }, 
  imagemOne: {
    width: 180,
    height: 240,
    alignSelf: 'center',
  }, 
  campoInput: {
    height: 40,
    margin: 2,
    borderWidth: 1,
    padding: 5,
    fontSize: 16,
  }

});