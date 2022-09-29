import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>Home</Text>
        </View>

        <View>
          <Text style={styles.texto}>
            Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare
            consequat. Praesent lacinia ultrices consectetur. Sed non ipsum
            felis.Mé faiz elementum girarzis, nisi eros vermeio. Atirei o pau no
            gatis, per gatis num morreus. Em pé sem cair, deitado sem dormir,
            sentado sem cochilar e fazendo pose.
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
export default HomeScreen;
