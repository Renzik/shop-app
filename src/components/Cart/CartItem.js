import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const CartItem = ({ item, onSelect }) => {
  let TouchableComponent = TouchableOpacity;

  Platform.OS === 'android' && Platform.Version >= 21
    ? (TouchableComponent = TouchableNativeFeedback)
    : null;

  return (
    <TouchableComponent onPress={onSelect}>
      <Text>{item.title}</Text>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({});

export default CartItem;
