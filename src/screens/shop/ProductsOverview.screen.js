import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverview = () => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      renderItem={item => <Text>{item.item.title}</Text>}
      data={products}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default ProductsOverview;
