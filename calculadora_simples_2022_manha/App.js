//CABEÇALHO (IMPORTS)
import React, {useState} from 'react';
//COMPONENTES
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';

//BLOCO JAVASCRIPT E JSX
export default function App(){
  //BLOCO JS (VARIAVEIS, CONSTANTES, FUNCOES...)
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(0);

  const somar = function(){
    setResultado(Number(valor1) + Number(valor2));
  }

  const subtrair = function(){
    setResultado(Number(valor1) - Number(valor2));
  }

  const multiplicar = function(){
    setResultado(Number(valor1) * Number(valor2));
  }

  const dividir = function(){
    if(Number(valor2) == 0){
      setResultado('Infinito');
      return;
    }
    setResultado((Number(valor1) / Number(valor2)).toFixed(10));
  }
  return(
    //BLOCO JSX (ELEMENTOS VISUAIS)
    <View style={styles.container}>
      <View style={styles.blocoEntrada}>
        {/*BLOCO DE INPUT*/}
        <TextInput 
          style={styles.campoEntrada}
          placeholder='Valor 01'
          keyboardType='numeric'
          onChangeText={(valor) => {setValor1(valor)}}/>

        <TextInput 
          style={styles.campoEntrada}
          placeholder='Valor 02'
          keyboardType='numeric'
          onChangeText={(valor) => {setValor2(valor)}}/>
      </View>

      <View style={styles.blocoBotoes}>
        {/*BLOCO DOS BOTOES*/}
        <TouchableOpacity 
          style={styles.botao}
          onPress={somar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botao}
          onPress={subtrair}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botao}
          onPress={multiplicar}>
          <Text style={styles.textoBotao}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botao}
          onPress={dividir}>
          <Text style={styles.textoBotao}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.blocoResultado}>
        {/*BLOCO DO RESULTADO*/}
        <Text style={styles.textoResultado}>{resultado}</Text>
      </View>
    </View>
  );
}

//BLOCO DE FORMATAÇÃO
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'cyan',
  }, blocoEntrada: {
    width: 250,
    borderWidth: 2,
    borderColor: 'green',
  }, campoEntrada: {
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center',
    fontSize: 30,
    margin: 3,
    borderRadius: 5
  }, blocoBotoes: {
    marginTop: 5,
    borderWidth: 2,
    borderColor: 'green',
    width: 250,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 3
  }, botao: {
    backgroundColor: 'blue',
    borderRadius: 10,
    width: 50,
    height: 50,
    marginLeft: 5,
  },textoBotao: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
  }, blocoResultado: {
    borderWidth: 2,
    borderColor: 'green',
    width: 250,
    padding: 5,
    marginTop: 5
  }, textoResultado: {
    fontSize: 30,
    textAlign: 'center',
  }
});
