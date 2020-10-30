import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './redux/store';

import ProductsNavigator from './navigation/Shop.navigator';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <ProductsNavigator style={styles.app} />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
