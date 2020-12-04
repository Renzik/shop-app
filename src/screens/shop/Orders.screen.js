import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import OrderItem from '../../components/Orders/OrderItem';
import SearchBar from '../../components/SearchBar';

const Orders = ({ navigation }) => {
  const orders = useSelector(({ orders: { orders } }) => orders);

  return (
    <View>
      <View>
        <Text></Text>
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

const styles = StyleSheet.create({});
