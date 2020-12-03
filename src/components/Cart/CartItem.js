import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';

import CustomButton from '../ProductDetail/CustomButton';
import CartQtyButton from '../UI/CartQtyButton';

import { deleteItem } from '../../redux/actions/cart.actions';

const CartItem = ({ item, onSelect }) => {
  // let TouchableComponent = TouchableOpacity;

  // Platform.OS === 'android' && Platform.Version >= 21
  //   ? (TouchableComponent = TouchableNativeFeedback)
  //   : null;

  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image resizeMode='contain' style={styles.image} source={{ uri: item.images[0] }} />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.inStock}>In Stock</Text>
          <Text>
            <Text style={styles.size}>Size:</Text> 70" Long
          </Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <CartQtyButton quantity={item.quantity} itemId={item.id} />
        <View>
          <CustomButton
            onPress={() => dispatch(deleteItem(item.id))}
            textStyles={styles.deleteButtonTextStyles}
            style={styles.deleteButton}>
            Delete
          </CustomButton>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableContainer: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  imageContainer: {
    height: 125,
    width: '28%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  itemDetails: {
    width: '70%',
    paddingLeft: 10,
  },
  title: {
    fontFamily: 'poppins-regular',
    fontSize: 14.5,
    paddingTop: 5,
  },
  price: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    color: '#A81B16',
  },
  inStock: {
    color: '#008f0e',
  },
  size: {
    fontFamily: 'poppins-bold',
  },
  actionsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  deleteButton: {
    elevation: 0,
  },
  deleteButtonTextStyles: {
    fontSize: 12,
  },
});

export default CartItem;
