import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

import Theme from '../../constants/Theme';

const ShopItem = ({ itemData, onSelect }) => {
  let TouchableComponent = TouchableOpacity;
  const { title, imageUrl, price, description } = itemData;

  Platform.OS === 'android' && Platform.Version >= 21
    ? (TouchableComponent = TouchableNativeFeedback)
    : null;

  return (
    <TouchableComponent style={styles.touchableContainer} onPress={onSelect}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {description}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.dollarSign}>$</Text>
          <Text style={styles.price}>{price.toString().split('.')[0]}</Text>
          <Text style={styles.cents}>{price.toString().split('.')[1]}</Text>
        </View>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    height: 190,
    marginHorizontal: 8,
    marginVertical: 4,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.productBackground,
  },
  image: {
    width: '90%',
    height: '90%',
  },
  itemDetails: {
    width: '55%',
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'poppins-regular',
    paddingVertical: 5,
  },
  description: {
    fontSize: 13,
    fontFamily: 'poppins-regular',
    paddingBottom: 5,
  },
  dollarSign: {
    fontSize: 10,
    lineHeight: 22,
  },
  price: {
    fontFamily: 'poppins-medium',
    lineHeight: 29,
    fontSize: 18,
  },
  cents: {
    fontSize: 10,
    lineHeight: 23,
  },
});

export default ShopItem;
