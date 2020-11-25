import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import CartItem from './CartItem';

const CartItemList = ({ cartItems, navigation }) => {
  const renderCartItem = ({ item }) => {
    return (
      <CartItem
        item={item}
        onSelect={() => {
          navigation.navigate({
            routeName: 'ProductDetail',
            params: { itemId: item.id, itemName: item.title },
          });
        }}
      />
    );
  };

  return (
    <View>
      <FlatList data={cartItems} renderItem={renderCartItem} />
    </View>
  );
};

export default CartItemList;