import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

import SearchBar from '../../components/SearchBar';
import RadioButton from '../../components/UI/RadioButton';

const OrdersFilter = ({ navigation }) => {
  const options = [
    {
      key: '30 days',
      text: 'Last 30 days',
    },
    {
      key: '3 months',
      text: 'Last 3 months',
    },
    {
      key: '2020',
      text: '2020',
    },
    {
      key: '2019',
      text: '2019',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subHeader}>
        <View>
          {/* icon */}
          <Text>Back</Text>
        </View>
        <View>{/* Apply button */}</View>
      </View>
      <View style={styles.filtersContainer}>
        <RadioButton options={options} />
      </View>
    </View>
  );
};

OrdersFilter.navigationOptions = ({ navigation }) => ({
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

export default OrdersFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  filtersContainer: {
    // backgroundColor: 'black',
  },
});
