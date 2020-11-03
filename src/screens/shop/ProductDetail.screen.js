import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductDetail = ({ navigation }) => {
  const itemId = navigation.getParam('itemId');
  const itemName = navigation.getParam('itemName');

  return (
    <View>
      <Text>Product Detail Screen</Text>
      <Text>
        {itemName}
        {itemId}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductDetail;
