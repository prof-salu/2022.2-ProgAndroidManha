import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const email = () => {
  const contato = 'contato@mussumipsum.com';
  const assunto = 'Quero falar com o mussum';
  const corpo = 'Bom dia Mussum...'
  Linking.openURL('mailto:' + contato + '?subject=' + assunto + '&body=' + corpo);
}

function ligar(){
  const telefone = '12345678';
  Linking.openURL('tel:'+telefone);
}

function sms(){
  const telefone = '12345678';
  const corpo = 'Gostaria de uma Cacildis bem gelada.'
  Linking.openURL('sms:' + telefone + '?body=' + corpo);
}

function mapa(){
  const latitude = '-22.91297';
  const longitude = '-43.22316';
  Linking.openURL('geo:' + latitude + ',' + longitude);
}

class ContatoScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>Contato</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.botao}
            onPress={email}>
            <Text style={styles.textoBotao}>E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={ligar}
            style={styles.botao}>
            <Text style={styles.textoBotao}>Ligar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={sms}>
            <Text style={styles.textoBotao}>SMS</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={mapa}>
            <Text style={styles.textoBotao}>Mapa</Text>
          </TouchableOpacity>
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
  botao: {
    alignSelf: 'center',
    width: 250,
    height: 50,
    backgroundColor: 'purple',
    marginBottom: 5,
    borderRadius: 5,
  },
  textoBotao:{
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    lineHeight: 50,
  }
});
export default ContatoScreen;
