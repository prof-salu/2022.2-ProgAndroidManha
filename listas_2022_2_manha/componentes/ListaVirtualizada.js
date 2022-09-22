import React from 'react';
import {View, Text, StyleSheet, VirtualizedList} from 'react-native';

class ListaVirtualizada extends React.Component{
  //Lista de jogos
  games = [
    {id: 1, nome: 'World of Warcraft'},
    {id: 2, nome: 'Tekken 7'},
    {id: 3, nome: 'Shadow Dancer'},
    {id: 4, nome: 'Alex Kidd'},
    {id: 5, nome: 'Call of Duty'},
    {id: 6, nome: 'Winning Eleven'}, 
  ];

getItem = (games, index) => {
  return games[index];
}

Item = (item) => (
  <View style={styles.item}>
    <Text style={styles.texto}> {item.title}</Text>
  </View>
);

  render(){
    return(
      <View>
        <VirtualizedList 
          /*Lista exibida*/data={this.games}
          /*QTD Itens renderizados*/initialNumToRender={5}
          /*Exibição dos itens*/renderItem={({item}) => (
            <this.Item title={item.nome} key={item.id} />
          )}
          /*Identificador*/keyExtractor={(item) => item.key}
          /*Qtd itens exibidos*/getItemCount={(games) => games.length}
          /*Indicação do item*/getItem={this.getItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item:{
    backgroundColor: 'orange',
    height: 150,
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 20,
  }, texto: {
    fontSize: 32,
  }
});

export default ListaVirtualizada;