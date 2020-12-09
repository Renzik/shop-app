import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';

import ShopItem from '../../components/ShopItem';

const UserProducts = () => {
  const userProducts = useSelector(({ products: { userProducts } }) => userProducts);

  return (
    <FlatList
      numColumns={2}
      data={userProducts}
      keyExtractor={item => item.id}
      renderItem={item => <ShopItem itemData={item.item} />}
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
