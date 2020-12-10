import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Platform, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../../components/SearchBar';
import CartItemList from '../../components/Cart/CartItemList';
import CustomButton from '../../components/ProductDetail/CustomButton';
import { checkout } from '../../redux/actions/orders.actions';
import { clearCart } from '../../redux/actions/cart.actions';
import CartItem from '../../components/Cart/CartItem';
import CartQtyButton from '../../components/UI/CartQtyButton';

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

  const renderCartItem = ({ item }) => {
    return (
      <CartItem
        reducerNotice={'cart'}
        item={item}
        onSelect={() => {
          navigation.navigate({
            routeName: 'ProductDetail',
            params: { itemId: item.id, itemName: item.title },
          });
        }}>
        <CartQtyButton quantity={item.quantity} itemId={item.id} />
      </CartItem>
    );
  };

  const itemOrItems = amountOfItems === 1 ? 'item' : 'items';
  const dispatch = useDispatch();

  const ClearAndCheckout = () => {
    dispatch(clearCart());
    dispatch(checkout(cartItems, cartTotal));
  };

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.container}>
              <View style={styles.br} />
              <View style={styles.cartDetails}>
                <Text style={styles.cartSummaryText}>
                  Subtotal ({amountOfItems} {itemOrItems}):
                  <Text style={styles.cartSubtotal}> ${cartTotal}</Text>
                </Text>
                <CustomButton onPress={ClearAndCheckout} style={styles.checkoutButton}>
                  Checkout Cart
                </CustomButton>
              </View>
              <View style={styles.thinBr} />
            </View>
          </>
        }
        data={cartItems}
        renderItem={renderCartItem}
      />
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
    paddingTop: 15,
  },
  br: {
    borderWidth: 4,
    borderColor: '#ededed',
  },
  thinBr: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    width: Dimensions.get('screen').width,
    alignSelf: 'center',
  },
  cartDetails: {
    padding: 15,
    width: Dimensions.get('screen').width,
  },
  cartSummaryText: {
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
});

export default Cart;
