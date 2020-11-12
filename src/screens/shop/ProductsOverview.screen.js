import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import ItemList from '../../components/ItemList';
import SearchBar from '../../components/SearchBar';

const ProductsOverview = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);

  return <ItemList itemData={products} navigation={navigation} />;
};

ProductsOverview.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'All Products',
    headerRight: () => (
      <SearchBar style={{ width: Dimensions.get('screen').width * 0.95 }} navigation={navigation} />
    ),
  };
};

const styles = StyleSheet.create({});

export default ProductsOverview;