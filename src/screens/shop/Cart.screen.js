import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import SearchBar from '../../components/SearchBar';
import CartItemList from '../../components/Cart/CartItemList';

const Cart = ({ navigation }) => {
  const cartTotal = useSelector(({ cart: { total } }) => total);
  const cartItems = useSelector(({ cart: { items } }) => {
    const transformedItems = [];

    for (const key in items) {
      const currItem = items[key];
      transformedItems.push({
        id: key,
        price: currItem.price,
        quantity: currItem.quantity,
        sum: currItem.sum,
        title: currItem.title,
      });
    }
    return transformedItems;
  });

  return <CartItemList cartItems={cartItems} navigation={navigation} />;
};

Cart.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'All Products',
    headerRight: () => (
      <SearchBar style={{ width: Dimensions.get('screen').width * 0.95 }} navigation={navigation} />
    ),
  };
};

const styles = StyleSheet.create({});

export default Cart;
