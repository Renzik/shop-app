import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const EditProduct = ({ navigation }) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

EditProduct.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <Icon
      containerStyle={{ paddingHorizontal: 15 }}
      name='arrow-back'
      onPress={() => navigation.goBack()}
    />
  ),
});

export default EditProduct;

const styles = StyleSheet.create({});
