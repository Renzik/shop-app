import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import OrderItem from '../../components/Orders/OrderItem';

const Orders = ({ navigation }) => {
  const orders = useSelector(({ orders: { orders } }) => orders);

  return (
    <View>
      <View>
        <Text>ORDERS SCREENNNNN</Text>
      </View>

      <View>
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={itemData => <OrderItem itemData={itemData} navigation={navigation} />}
        />
      </View>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
