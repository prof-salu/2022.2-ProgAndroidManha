import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class SobreScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>Sobre</Text>
        </View>

        <View>
          <Text style={styles.texto}>
            Sapien in monti palavris qui num significa nadis i pareci latim.Quem
            num gosta di mim que vai caçá sua turmis!Nec orci ornare consequat.
            Praesent lacinia ultrices consectetur. Sed non ipsum felis.Per
            aumento de cachacis, eu reclamis.
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
export default SobreScreen;
