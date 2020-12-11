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
  const { title, images, price } = itemData;

  Platform.OS === 'android' && Platform.Version >= 21
    ? (TouchableComponent = TouchableNativeFeedback)
    : null;

  // console.log(itemData);

  return (
    <TouchableComponent style={styles.touchableContainer} onPress={onSelect}>
      <View style={styles.gridContainer}>
        <View style={styles.itemContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: images[0] }}
              onError={err => (Platform.OS === 'android' ? console.log('ERROR:', err) : null)}
            />
          </View>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {title}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.dollarSign}>$</Text>
              <Text style={styles.text}>{price.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    flex: 1,
  },
  gridContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Theme.productBackground,
    margin: 2,
    height: 220,
  },
  itemContainer: {
    flex: 1,
  },
  imageContainer: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 125,
  },
  textContainer: {
    paddingLeft: 10,
  },
  text: {
    textAlign: 'left',
    fontSize: 15,
    lineHeight: 25,
    fontFamily: 'poppins-regular',
  },
  dollarSign: {
    fontSize: 11,
    lineHeight: 20,
  },
});

export default ShopItem;
