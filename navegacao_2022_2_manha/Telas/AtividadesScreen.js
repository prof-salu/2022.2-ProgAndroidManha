import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AtividadesScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>Atividades</Text>
        </View>

        <View>
          <Text style={styles.texto}>
            Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu
            levo!Praesent vel viverra nisi. Mauris aliquet nunc non turpis
            scelerisque, eget.Admodum accumsan disputationi eu sit. Vide
            electram sadipscing et per.Paisis, filhis, espiritis santis. .
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  texto: {
    fontSize: 16,
    padding: 5,
    textAlign: 'justify',
  },
});
export default AtividadesScreen;
