import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

const OrderItem = ({ navigation, itemData }) => {
  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21)
    TouchableComponent = TouchableNativeFeedback;

  return (
    <TouchableComponent onPress={() => console.log('item clicked')}>
      <View>
        <Text></Text>
      </View>
    </TouchableComponent>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
