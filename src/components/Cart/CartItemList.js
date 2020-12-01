import React from 'react';
import { FlatList } from 'react-native';

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

  return <FlatList data={cartItems} renderItem={renderCartItem} />;
};

export default CartItemList;
