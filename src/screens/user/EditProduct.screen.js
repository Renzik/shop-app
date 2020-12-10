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
  headerTitle: () =>
    navigation.getParam('itemId') ? (
      <Text style={styles.headerTitle}>Edit Product</Text>
    ) : (
      <Text style={styles.headerTitle}>Add New Product</Text>
    ),
  headerRight: () => (
    <AntDesign style={{ marginRight: 15 }} name='check' size={25} onPress={() => {}} />
  ),
});

export default EditProduct;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'poppins-regular',
    fontSize: 18,
  },
});
