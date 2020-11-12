import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomPrice = ({ price, dollarStyles, dollarSignStyles, centsStyles }) => {
  const [dollar, cents] = price.toString().split('.');

  return (
    <View style={styles.priceStyles}>
      <Text style={{ ...styles.dollarSign, ...dollarSignStyles }}>$</Text>
      <Text style={{ ...styles.dollar, ...dollarStyles }}>{dollar}</Text>
      <Text style={{ ...styles.cents, ...centsStyles }}>{cents}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  priceStyles: {
    flexDirection: 'row',
  },
  dollarSign: {
    fontFamily: 'poppins-regular',
  },
  dollar: {
    fontFamily: 'poppins-medium',
  },
  cents: {
    fontFamily: 'poppins-regular',
  },
});

export default CustomPrice;
