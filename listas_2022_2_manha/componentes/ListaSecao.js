import React from 'react';
import { View, Text, StyleSheet, SectionList} from 'react-native';

class ListaSecao extends React.Component{
  games=[
    {jogo: 'Street Fighter', data: ['Ryu', 'Ken', 'Sagat']},
    {jogo: 'Mortal Kombat', data: ['Scorpion', 'Sub Zero', 'Smoke']},
    {jogo: 'Tekken', data: ['Jin', 'Paul', 'King']}
  ];

  Item = ({titulo}) => (
    <View style={styles.item}>
      <Text style={styles.titulo}> {titulo} </Text>
    </View>
  )

  render(){
    return(
      <View style={styles.constainer}>
        <SectionList 
          sections={this.games}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => 
            <this.Item titulo={item}/>} 
            renderSectionHeader={({section: {jogo}}) => 
              (<Text style={styles.header}> {jogo} </Text> )} />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    marginHorizontal: 16,
  }, item: {
    backgroundColor: '#FFFCCC',
    padding: 20,
    marginVertical: 8,
  }, header:{
    fontSize: 32,
    backgroundColor: '#FFF',
  }, titulo: {
    fontSize: 24,
  }
});

export default ListaSecao;