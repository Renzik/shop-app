import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

import CustomIcon from '../CustomIcon';
import Theme from '../../../constants/Theme';

const CartQtyButton = ({ quantity, increaseQty, decreaseQty }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          ...styles.increaseDecreaseContainer,
          borderRightWidth: 1,
          borderRightColor: '#999',
        }}>
        <Feather style={styles.button} size={20} name={quantity === 1 ? 'trash' : 'minus'} />
      </View>
      <View style={styles.quantity}>
        <Text style={styles.quantityText}>{quantity}</Text>
      </View>
      <View
        style={{
          ...styles.increaseDecreaseContainer,
          borderLeftWidth: 1,
          borderLeftColor: '#999',
        }}>
        <Entypo style={styles.button} size={20} name='plus' />
      </View>
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
    zIndex: 999,
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
