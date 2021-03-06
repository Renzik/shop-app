import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import SearchResultItem from './SearchResultItem';

const SearchResultsItemList = ({ itemData, navigation }) => {
  const renderShopItem = ({ item }) => {
    return (
      <SearchResultItem
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
    <View style={styles.container}>
      <FlatList renderItem={renderShopItem} data={itemData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingBottom: '20%' },
});

export default SearchResultsItemList;
