import React, { useState, useContext, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

import { LivroContext } from './EnviaLivro';

export default function Form() {
  const { livro } = useContext(LivroContext);
  const db = SQLite.openDatabase('db.MainDB');
  const navigation = useNavigation();

  const [codigo, setCodigo] = useState('');
  const [inputTitulo, setInputTitulo] = useState('');
  const [inputAssunto, setInputAssunto] = useState('');
  const [inputEditora, setInputEditora] = useState('');
  const [inputAutor, setInputAutor] = useState('');

  useEffect(() => {
    setCodigo(livro.codigo);
    setInputTitulo(livro.titulo);
    setInputAssunto(livro.assunto);
    setInputAutor(livro.autor);
    setInputEditora(livro.editora);
  }, []);

  const gravaLivro = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO livro (titulo, assunto, editora, autor) VALUES (?, ?, ?, ?)',
        [inputTitulo, inputAssunto, inputEditora, inputAutor],
        (tx, resultado) => {
          console.log('Resultado', resultado.rowsAffected);
          if (resultado.rowsAffected > 0) {
            console.log('Dados gravados com sucesso');
          } else {
            console.log('Falha na gravacao');
          }
        }
      );
    });
    navigation.navigate('Home');
  };
  
  const atualizaLivro = () => {
    db.transaction((tx) => {
      tx.executeSql('UPDATE livro SET titulo=?, editora=?,assunto=?,autor=? WHERE codigo=?',
      [inputTitulo, inputEditora, inputAssunto, inputAutor, codigo],
      (tx, resultado) => {
        if(resultado.rowsAffected > 0){
          console.log('alterado com sucesso!');
        }else{
          console.log('erro!!');
        }
      })
    })
    navigation.navigate('Home');
  }

  const apagaLivro = () => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM livro WHERE codigo=?',
      [codigo],
      (tx, resultado) => {
        if(resultado.rowsAffected > 0){
          console.log('Livro apagado.');
        }else{
          console.log('erro');
        }
      })
    })
    navigation.navigate('Home');
  }

  function mostraLivro() {
    console.log(
      inputTitulo + ' ' + inputAssunto + ' ' + inputEditora + ' ' + inputAutor
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Titulo"
        value={inputTitulo}
        onChangeText={(valor) => setInputTitulo(valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Assunto"
        value={inputAssunto}
        onChangeText={(valor) => setInputAssunto(valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Editora"
        value={inputEditora}
        onChangeText={(valor) => setInputEditora(valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Autor"
        value={inputAutor}
        onChangeText={(valor) => setInputAutor(valor)}
      />

      {/*(condicao)?(verdadeiro):(falso)*/}

      {(codigo == '') ?  
        (<TouchableOpacity style={styles.botao} onPress={gravaLivro}>
        <Text style={styles.textoBotao}> Gravar</Text>
        </TouchableOpacity>) : (null)}

      {(codigo != '')? 
        (<TouchableOpacity style={styles.botao} onPress={atualizaLivro}> 
          <Text style={styles.textoBotao}> Atualizar</Text>
        </TouchableOpacity>) : (null)}

      {(codigo != '')?
        (<TouchableOpacity style={styles.botao} onPress={apagaLivro}>
          <Text style={styles.textoBotao}> Apagar</Text>
        </TouchableOpacity>) : (null)}      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    alignItems: 'center',
    borderWidth: 2,
    marginBottom: 3,
    fontSize: 20,
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 20,
    marginBottom: 5,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});
