import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import MenuAbas from './Navegacao/MenuAbas';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuAbas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
});
