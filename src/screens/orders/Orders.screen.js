import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import OrderItem from '../../components/Orders/OrderItem';
import SearchBar from '../../components/SearchBar';
import { AntDesign } from '@expo/vector-icons';

const Orders = ({ navigation }) => {
  const orders = useSelector(({ orders: { orders } }) => orders);

  return (
    <View>
      <View style={styles.ordersScreenTopContainer}>
        <Text style={styles.title}>Your Orders</Text>
        <View style={styles.filterContainer}>
          <Text style={styles.filterText}>Filter</Text>
          <AntDesign name='right' color='#777' size={20} />
        </View>
      </View>

      <View>
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={itemData => <OrderItem itemData={itemData.item} navigation={navigation} />}
        />
      </View>
    </View>
  );
};

Orders.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <Icon
      containerStyle={{ paddingHorizontal: 15 }}
      name='arrow-back'
      onPress={() => {
        navigation.goBack();
      }}
    />
  ),
  headerRight: () => (
    <SearchBar style={{ width: Dimensions.get('screen').width * 0.85 }} navigation={navigation} />
  ),
});

export default Orders;

const styles = StyleSheet.create({
  ordersScreenTopContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontFamily: 'poppins-bold',
    fontSize: 20,
    width: '80%',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderLeftWidth: 1,
    borderColor: '#999',
    width: '30%',
  },
  filterText: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
});
