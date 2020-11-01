import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ItemList from '../../components/ItemList';

const ProductsOverview = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);

  return <ItemList itemData={products} navigation={navigation} />;
};

ProductsOverview.navigationOptions = {
  headerTitle: 'All Products',
};

const styles = StyleSheet.create({});

export default ProductsOverview;
