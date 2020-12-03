import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import Theme from '../../../constants/Theme';
import { increaseQty, decreaseQty, deleteItem } from '../../redux/actions/cart.actions';

const CartQtyButton = ({ quantity, itemId }) => {
  const dispatch = useDispatch();

  const decreaseOrDelete = id =>
    quantity <= 1 ? dispatch(deleteItem(id)) : dispatch(decreaseQty(id));

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => decreaseOrDelete(itemId)}
        style={{
          ...styles.increaseDecreaseContainer,
          borderRightWidth: 1,
          borderRightColor: '#999',
        }}>
        <Feather style={styles.button} size={20} name={quantity === 1 ? 'trash' : 'minus'} />
      </TouchableOpacity>
      <View style={styles.quantity}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(increaseQty(itemId))}
        style={{
          ...styles.increaseDecreaseContainer,
          borderLeftWidth: 1,
          borderLeftColor: '#999',
        }}>
        <Entypo style={styles.button} size={20} name='plus' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '38%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    overflow: 'hidden',
  },
  increaseDecreaseContainer: {
    flex: 1.3,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // zIndex: 5,
    backgroundColor: '#f0f0ef',
  },
  quantity: {
    flex: 2,
    alignItems: 'center',
  },
  quantityText: {
    fontFamily: 'poppins-regular',
    fontSize: 18,
    color: Theme.orange,
  },
});

export default CartQtyButton;
