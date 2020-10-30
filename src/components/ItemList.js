import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ShopItem from './ShopItem';

const ItemList = ({ itemData, navigation }) => {
  const renderShopItem = item => {
    return (
      <ShopItem
        itemData={item}
        // onSelect={() => {
        //   navigation.navigate({
        //     routeName: 'ItemDetail',
        //   });
        // }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList numColumns={2} renderItem={renderShopItem} data={itemData} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 15,
  },
});

export default ItemList;
