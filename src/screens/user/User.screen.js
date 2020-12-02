import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Orders from '../shop/Orders.screen';

const User = ({ navigation }) => {
  return (
    <View>
      <Button title='orders' onPress={() => navigation.navigate('Orders')} />
    </View>
  );
};

export default User;

const styles = StyleSheet.create({});
