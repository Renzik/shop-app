import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const OrderItem = ({ navigation, itemData }) => {
  let TouchableComponent = TouchableOpacity;
  const { readableDate, totalAmount, items } = itemData;

  if (Platform.OS === 'android' && Platform.Version >= 21)
    TouchableComponent = TouchableNativeFeedback;

  return (
    <TouchableComponent style={styles.container} onPress={() => console.log('item clicked')}>
      <View style={styles.orderContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: items[0].images[0] }} />
        </View>
        <View style={styles.orderDetails}>
          <Text numberOfLines={2} style={styles.date}>
            {readableDate}
          </Text>
          <Text style={styles.total}>${totalAmount}</Text>
        </View>
        <AntDesign name='right' color='#777' size={23} />
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  orderContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  orderDetails: {
    alignItems: 'center',
  },
  date: {
    fontFamily: 'poppins-bold',
    fontSize: 16,
  },
  total: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    color: '#777',
  },
});

export default OrderItem;
