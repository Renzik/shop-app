import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import ItemList from '../../components/ItemList';

const SearchResults = ({ navigation }) => {
  const items = useSelector(state => state.products.availableProducts);
  const searchInput = navigation.getParam('input');

  const filteredItem = items.filter(item =>
    item.title.toLowerCase().split(' ').includes(searchInput.toLowerCase())
  );

  return <ItemList itemData={filteredItem} navigation={navigation} />;
};

export default SearchResults;

const styles = StyleSheet.create({});
