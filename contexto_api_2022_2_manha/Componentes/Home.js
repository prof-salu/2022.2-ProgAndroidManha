import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {AutenticaContexto} from './Contexto';
import {useNavigation} from '@react-navigation/native';

export default function Home(){

  const navigation = useNavigation();

  const {nome} = useContext(AutenticaContexto);
  const {email} = useContext(AutenticaContexto);

  function meusPedidos(){
    navigation.navigate('Pedidos');
  }
  
  return(
    <View style={styles.container}>
      <Text>Olá, {nome}, bem vindo ao App da loja Legal.</Text>
      <Text>E-mail: {email}</Text>

      <TouchableOpacity style={styles.botao} onPress={meusPedidos}>
        <Text style={styles.textoBotao}>Meus pedidos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  botao: {
    height: 45,
    width: 'fit-content',
    backgroundColor: 'red',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  textoBotao: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})