import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {AutenticaContexto} from './Contexto'
export default function Login(){

  const navigation = useNavigation();

  const [inputEmail, setInputEmail] = useState('');
  const [inputSenha, setInputSenha] = useState('');

  const {email} = useContext(AutenticaContexto);
  const {senha} = useContext(AutenticaContexto);

  function testeLogin(){
    if(inputEmail == '' || inputSenha == ''){
      console.log("Dados não preenchidos!");
      return;
    }
    console.log('FORM --> ' + inputEmail + " - " + inputSenha);
    console.log('CONTEXTO --> ' + email + " - " + senha);

    if(inputEmail == email && inputSenha == senha){
      //Faz o login(HOME)
      navigation.navigate('Home');
    }else{
      alert('Senha ou e-mail inválido!');
      limpar();
    }
  }

  function limpar(){
    setInputEmail('');
    setInputSenha('');
  }

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputEmail}
        onChangeText={(valor) => setInputEmail(valor)}
        placeholder='Seu e-mail' />

      <TextInput
        style={styles.input}
        value={inputSenha}
        placeholder='Sua senha'
        onChangeText={(valor) => setInputSenha(valor)}
        secureTextEntry={true} />

      <TouchableOpacity style={styles.botao} onPress={testeLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '90%',
    borderRadius: 4,
    borderWidth: 1,
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 20,
  },
  botao: {
    height: 45,
    width: '90%',
    backgroundColor: 'red',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBotao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});