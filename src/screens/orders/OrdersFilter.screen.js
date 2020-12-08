import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import SearchBar from '../../components/SearchBar';
import RadioButton from '../../components/UI/RadioButton';
import CustomButton from '../../components/ProductDetail/CustomButton';

const OrdersFilter = ({ navigation }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

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
        <View style={styles.leftSubHeader}>
          <AntDesign onPress={() => navigation.goBack()} name='left' color='#777' size={15} />
          <Text onPress={() => navigation.goBack()} style={styles.back}>
            Back
          </Text>
        </View>
        <View style={styles.rightSubHeader}>
          <CustomButton
            style={styles.applyButton}
            disabled={isButtonDisabled}
            textStyles={styles.applyButtonText}>
            Apply
          </CustomButton>
        </View>
      </View>
      <View style={styles.filtersContainer}>
        <RadioButton onPress={() => setIsButtonDisabled(false)} options={options} />
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
  },
  subHeader: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSubHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSubHeader: {
    height: 44,
  },
  filtersContainer: {
    // backgroundColor: 'black',
  },
  back: {
    fontFamily: 'poppins-bold',
    fontSize: 16,
    marginLeft: 5,
  },
  applyButton: {
    // borderWidth: 1,
    backgroundColor: '#FF9E00',
  },
  applyButtonText: {
    // fontSize: 16,
    // fontFamily: 'poppins-regular',
    color: 'black',
  },
});
