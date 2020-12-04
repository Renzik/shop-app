import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../../components/SearchBar';
import CartItemList from '../../components/Cart/CartItemList';
import CustomButton from '../../components/ProductDetail/CustomButton';
import { checkout } from '../../redux/actions/orders.actions';
import { clearCart } from '../../redux/actions/cart.actions';

const Cart = ({ navigation }) => {
  let amountOfItems = 0;
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
      amountOfItems += currItem.quantity;
    }
    return transformedItems;
  });
  const itemOrItems = amountOfItems === 1 ? 'item' : 'items';
  const dispatch = useDispatch();

  const dispatchAndClearCart = () => {
    dispatch(clearCart());
    dispatch(checkout(cartItems, cartTotal));
  };

  return (
    <View style={styles.container}>
      <View style={styles.br} />
      <View style={styles.cartDetails}>
        <Text style={styles.cartSummary}>
          Subtotal ({amountOfItems} {itemOrItems}):
          <Text style={styles.cartSubtotal}>${cartTotal}</Text>
        </Text>
        <CustomButton onPress={dispatchAndClearCart} style={styles.checkoutButton}>
          Checkout Cart
        </CustomButton>
      </View>
      <View style={styles.thinBr} />
      <View style={styles.itemList}>
        <CartItemList cartItems={cartItems} navigation={navigation} />
      </View>
    </View>
  );
};

Cart.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <SearchBar style={{ width: Dimensions.get('screen').width * 0.95 }} navigation={navigation} />
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  br: {
    borderTopWidth: 6,
    borderTopColor: '#ededed',
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
  },
  thinBr: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
    marginBottom: 10,
  },
  cartDetails: {
    height: Platform.OS === 'android' ? '22%' : '18%',
    paddingVertical: 10,
  },
  cartSummary: {
    fontFamily: 'poppins-regular',
    paddingBottom: 20,
  },
  cartSubtotal: {
    color: '#A81B16',
    fontFamily: 'poppins-bold',
    letterSpacing: 1,
  },
  checkoutButton: {
    backgroundColor: '#FFBC47',
  },
  itemList: {
    marginBottom: '30%',
  },
});

export default Cart;
