import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';

import ShopItem from '../../components/ShopItem';
import CartItem from '../../components/Cart/CartItem';

const UserProducts = ({ navigation }) => {
  const userProducts = useSelector(({ products: { userProducts } }) => userProducts);

  return (
    <FlatList
      numColumns={2}
      style={{ padding: 15 }}
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={item => (
        <CartItem item={item.item} onSelect={() => navigation.navigate('EditProduct')}>
          <Button title='Edit' />
        </CartItem>
      )}
    />
  );
};

UserProducts.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <Icon
        containerStyle={{ paddingHorizontal: 15 }}
        name='arrow-back'
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
    headerTitle: 'Your Products',
  };
};

export default UserProducts;

const styles = StyleSheet.create({});
