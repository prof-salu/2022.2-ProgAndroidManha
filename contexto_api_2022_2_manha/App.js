import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Navegacao from './Componentes/Navegacao';
import Contexto from './Componentes/Contexto';

import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Contexto>
          <Navegacao />
        </Contexto>        
      </NavigationContainer>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
