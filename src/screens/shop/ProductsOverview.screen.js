import React from 'react';
import { StyleSheet, View } from 'react-native';
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
    headerRight: () => <SearchBar navigation={navigation} />,
  };
};

const styles = StyleSheet.create({});

export default ProductsOverview;
