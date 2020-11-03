import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ShopItem from './ShopItem';

const ItemList = ({ itemData, navigation }) => {
  const renderShopItem = ({ item }) => {
    return (
      <ShopItem
        itemData={item}
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
