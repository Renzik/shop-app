import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import SearchBar from '../../components/SearchBar';

const Cart = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CART SCREEN!</Text>
    </View>
  );
};

Cart.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'All Products',
    headerRight: () => (
      <SearchBar style={{ width: Dimensions.get('screen').width * 0.95 }} navigation={navigation} />
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
  },
});

export default Cart;
