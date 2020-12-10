import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import ShopItem from '../../components/ShopItem';
import CartItem from '../../components/Cart/CartItem';
import CustomButton from '../../components/ProductDetail/CustomButton';

const UserProducts = ({ navigation }) => {
  const userProducts = useSelector(({ products: { userProducts } }) => userProducts);

  const editHandler = id => {
    navigation.navigate('EditProduct', { itemId: id });
  };

  return (
    <FlatList
      style={{ marginBottom: 10 }}
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={item => (
        <CartItem item={item.item} onSelect={() => editHandler(item.item.id)}>
          <CustomButton
            onPress={() => editHandler(item.item.id)}
            textStyles={styles.deleteButtonTextStyles}
            style={styles.deleteButton}>
            Edit
          </CustomButton>
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
    headerRight: () => (
      <AntDesign
        style={{ marginRight: 15 }}
        name='plus'
        size={23}
        onPress={() => navigation.navigate('EditProduct')}
      />
    ),
  };
};

export default UserProducts;

const styles = StyleSheet.create({
  deleteButton: {
    elevation: 0,
    width: '35%',
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  deleteButtonTextStyles: {
    fontSize: 12,
  },
});
