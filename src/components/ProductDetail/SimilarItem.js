import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import ShopItem from '../ShopItem';

const SimilarItem = ({ itemId, navigation }) => {
  const items = useSelector(({ products: { availableProducts } }) => availableProducts);

  const selectItem = () => {
    const item = items[Math.floor(Math.random() * items.length)];
    return item.id === itemId ? selectItem() : item;
  };

  const item = selectItem();

  const navigateToItem = () => navigation.push('ProductDetail', { itemId: item.id });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Similar item to consider</Text>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={navigateToItem}>
          <Image style={styles.image} source={{ uri: item.images[0] }} />
        </TouchableOpacity>
        <View style={styles.itemDetails}>
          <Text onPress={navigateToItem} style={styles.itemTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.itemDescription} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('screen').height * 0.2,
    justifyContent: 'center',
    margin: 15,
    // marginBottom: 500,
    padding: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
  },
  title: {
    fontFamily: 'poppins-bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  itemContainer: {
    width: '100%',
    height: '80%',
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: '100%',
  },
  itemDetails: {
    width: '70%',
  },
  itemDescription: {
    paddingVertical: 5,
  },
  itemTitle: {
    fontFamily: 'poppins-regular',
    color: '#0074CC',
  },
  itemPrice: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
});

export default SimilarItem;
