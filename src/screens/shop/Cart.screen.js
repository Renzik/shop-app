import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import SearchBar from '../../components/SearchBar';
import CartItemList from '../../components/Cart/CartItemList';

const Cart = ({ navigation }) => {
  const cartTotal = useSelector(({ cart: { total } }) => total).toFixed(2);
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
        images: currItem.images,
      });
    }
    return transformedItems;
  });
  const itemOrItems = cartItems.length === 1 ? 'item' : 'items';

  return (
    <View style={styles.container}>
      <View style={styles.cartDetails}>
        <Text>
          Subtotal ({cartItems.length} {itemOrItems}): {cartTotal}
        </Text>
      </View>
      <View style={styles.itemList}>
        <CartItemList cartItems={cartItems} navigation={navigation} />
      </View>
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
    padding: 20,
  },
  cartDetails: {
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

export default Cart;
