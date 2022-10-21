import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {AutenticaContexto} from './Contexto';

export default function Pedidos(){
  const {meusPedidos} = useContext(AutenticaContexto);

  return(
    <View style={styles.container}>
      <Text>Meus pedidos</Text>

      <FlatList
        data={meusPedidos}
        renderItem={({item}) => (
          <Text style={styles.item}>{'Codigo: ' + item.codigo + ', Descrição: ' + item.descricao + ', Valor: ' + item.valor}</Text>
        )}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  item:{
    fontSize: 12,
    color: 'blue',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  }
})