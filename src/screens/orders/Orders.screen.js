import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import OrderItem from '../../components/Orders/OrderItem';
import SearchBar from '../../components/SearchBar';
import { AntDesign } from '@expo/vector-icons';
// import OrdersFilterResults from './OrdersFilterResults.screen';

const Orders = ({ navigation }) => {
  const orders = useSelector(({ orders: { orders } }) => orders);

  const filterFunc = filterConfig => {
    let filteredOrders;

    if (filterConfig === '30 days') {
      const today = new Date();
      const last30Days = new Date(new Date().getTime() - 30 * 24 * 60 * 60 * 1000);
      filteredOrders = orders.filter(order => order.date <= today && order.date >= last30Days);
    }
    if (filterConfig === '3 months') {
      const today = new Date();
      const last30Days = new Date(new Date().getTime() - 90 * 24 * 60 * 60 * 1000);
      filteredOrders = orders.filter(order => order.date <= today && order.date >= last30Days);
    }
    if (filterConfig === '2020') {
      filteredOrders = orders.filter(order => order.readableDate.includes('2020'));
    }
    if (filterConfig === '2019') {
      filteredOrders = orders.filter(order => order.readableDate.includes('2019'));
    }

    navigation.navigate({
      routeName: 'OrdersFilterResults',
      params: { filteredOrders: filteredOrders, filterTitle: filterConfig },
    });
  };

  const goToFilters = () =>
    navigation.navigate({ routeName: 'OrdersFilters', params: { filterFunc: filterFunc } });

  return (
    <View>
      <View style={styles.ordersScreenTopContainer}>
        <Text style={styles.title}>Your Orders</Text>
        <View style={styles.filterContainer}>
          <Text onPress={goToFilters} style={styles.filterText}>
            Filter
          </Text>
          <AntDesign onPress={goToFilters} name='right' color='#777' size={20} />
        </View>
      </View>

      <View>
        {orders.length ? (
          <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={itemData => <OrderItem itemData={itemData.item} navigation={navigation} />}
          />
        ) : (
          <View style={{ alignItems: 'center', paddingVertical: 50 }}>
            <Text style={{ color: '#888' }}>NO ORDERS YET</Text>
          </View>
        )}
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
    marginBottom: 5,
    paddingVertical: 10,
    paddingHorizontal: 50,
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
    height: 40,
  },
  filterText: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
  },
});
