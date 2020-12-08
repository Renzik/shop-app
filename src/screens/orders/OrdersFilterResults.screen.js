import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

import OrderItem from '../../components/Orders/OrderItem';
import SearchBar from '../../components/SearchBar';

const OrdersFilterResults = ({ navigation }) => {
  const orders = navigation.getParam('filteredOrders');
  const title = navigation.getParam('filterTitle');

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={itemData => <OrderItem itemData={itemData.item} navigation={navigation} />}
      />
    </View>
  );
};

OrdersFilterResults.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <Icon
      containerStyle={{ paddingHorizontal: 15 }}
      name='arrow-back'
      onPress={() => {
        navigation.navigate('Orders');
      }}
    />
  ),
  headerRight: () => (
    <SearchBar style={{ width: Dimensions.get('screen').width * 0.85 }} navigation={navigation} />
  ),
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ECECEC',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: 'poppins-bold',
    fontSize: 14,
    color: '#555',
  },
});

export default OrdersFilterResults;
