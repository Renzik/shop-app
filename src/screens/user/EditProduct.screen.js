import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const EditProduct = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Price</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </ScrollView>
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
  form: {
    margin: 20,
  },
  formControl: {
    paddingVertical: 15,
    width: '100%',
  },
  label: {
    fontFamily: 'poppins-regular',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
