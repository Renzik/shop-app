import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import SearchBar from '../../components/SearchBar';
import CartItemList from '../../components/Cart/CartItemList';
import CustomButton from '../../components/ProductDetail/CustomButton';

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
      <View style={styles.br} />
      <View style={styles.cartDetails}>
        <Text style={styles.cartSummary}>
          Subtotal ({cartItems.length} {itemOrItems}):{' '}
          <Text style={styles.cartSubtotal}>${cartTotal}</Text>
        </Text>
        <CustomButton style={styles.checkoutButton}>Checkout Cart</CustomButton>
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
    headerTitle: 'All Products',
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
    height: '18%',
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
  itemList: {},
});

export default Cart;
