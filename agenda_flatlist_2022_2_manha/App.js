import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const contatos = [
      {nome: 'Laura',   email: 'lala@bol.com.br', tel: '12345678'},
      {nome: 'Carlos',  email: 'caca@gmail.com',  tel: '11223344'},
      {nome: 'Ana',     email: 'ana@globo.com',   tel: '98765432'}
    ];

  const [nomeContato, setNomeContato] = useState('');
  const [emailContato, setEmailContato] = useState('');
  const [telContato, setTelContato] = useState('');

  const [lista, setLista] = useState(contatos);
  
  const addContato = () =>{
    if(nomeContato == '' || emailContato == '' || telContato == ''){
      return;
    }

    //alert('Nome: ' + nomeContato + ', E-mail: ' + emailContato + ', Tel: ' + telContato);
    
    setLista((lista) => [
      ...lista,
      {nome: nomeContato, email: emailContato, tel: telContato},
    ]);
    
    limpar();
  }

  const editarContato = () => {
    setLista(
      lista.map((contato) => 
        contato.email == emailContato
          ? {...contato, nome: nomeContato, tel: telContato}
          : {...contato}
      )
    );

    limpar();
  }

  //Retorna o indice(posicao) do elemento na lista
  const indice = lista.findIndex(
    (item) => item.email == emailContato
  );

  const apagarContato = () => {
    console.log(indice); 
    if(emailContato == '' || indice == -1){
      return;
    }
    setLista([ 
      ...lista.slice(0, indice),
      ...lista.slice(indice+1, lista.length)
    ])
    limpar();
  }

  function limpar(){
    //Limpa os campos
    setNomeContato('');
    setEmailContato('');
    setTelContato('');
  }

  return (
    <View style={styles.container}>
     <View>
      {/*INPUT AREA */}
      <TextInput
        style={styles.entrada}
        placeholder='Nome'
        placeholderTextColor='red' 
        value={nomeContato}
        onChangeText={(valor) => {setNomeContato(valor)}}/>

      <TextInput
        style={styles.entrada}
        placeholder='E-mail'
        placeholderTextColor='red' 
        value={emailContato}
        onChangeText={(valor) => {setEmailContato(valor)}}/>

      <TextInput
        style={styles.entrada}
        placeholder='Telefone'
        placeholderTextColor='red' 
        value={telContato}
        onChangeText={(valor) => {setTelContato(valor)}}/>
     </View>

    <View>
    {/*BUTTON AREA */}
      <TouchableOpacity
        style={styles.botao}
        onPress={addContato}>
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={editarContato}>
        <Text style={styles.textoBotao}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={apagarContato}>
        <Text style={styles.textoBotao}>Apagar</Text>
      </TouchableOpacity> 
    </View>

    <View>
      {/*LIST AREA */}
      <FlatList
        data={lista}
        renderItem={({item}) => (
          <Text style={styles.item}> {item.nome + ' - ' + item.email + ' - ' + item.tel}</Text>
        )} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 8,
  },
  entrada: {
    textAlign: 'center',
    borderWidth: 2,
    marginBottom: 3,
    fontSize: 20,
  },
  botao: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    marginBottom: 5,
    borderRadius: 20,
  },
  textoBotao: {
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  item:{
    marginBottom: 1,
    fontSize: 16,
    color: 'purple',
    alignSelf: 'center'
  }
});
