import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import { store } from './redux/store';

import ProductsNavigator from './navigation/Shop.navigator';

const fetchFonts = () => {
  return Font.loadAsync({
    'poppins-thin': require('../assets/Fonts/Poppins-Thin.ttf'),
    'poppins-extra-light': require('../assets/Fonts/Poppins-ExtraLight.ttf'),
    'poppins-regular': require('../assets/Fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('../assets/Fonts/Poppins-Bold.ttf'),
  });
};

const App = () => {
  const [fontsLoading, setFontsLoading] = useState(false);

  if (!fontsLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoading(true)}
        onError={e => console.log('Fonts not loading!', e)}
      />
    );
  }

  return (
    <Provider store={store}>
      <StatusBar style='auto' />
      <ProductsNavigator style={styles.app} />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default App;
