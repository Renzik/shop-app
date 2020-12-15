import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { addNewProduct, editProduct } from '../../redux/actions/products.actions';

const EditProduct = ({ navigation }) => {
  const itemId = navigation.getParam('itemId');

  const editedProduct = useSelector(({ products }) =>
    products.userProducts.find(item => item.id === itemId)
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.images[0] : '');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

  const submitHandler = useCallback(() => {
    editedProduct
      ? dispatch(editProduct(itemId))
      : dispatch(addNewProduct(title, imageUrl, description, +price));
  }, [dispatch, itemId, imageUrl, description, price]);

  useEffect(() => {
    navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.input} value={title} onChangeText={text => setTitle(text)} />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={imageUrl => {
              setImageUrl(imageUrl);
            }}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput style={styles.input} value={price} onChangeText={price => setPrice(price)} />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={description => setDescription(description)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

EditProduct.navigationOptions = ({ navigation }) => {
  const submitFn = navigation.getParam('submit');
  return {
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
      <AntDesign
        style={{ marginRight: 15 }}
        name='check'
        size={25}
        onPress={() => {
          submitFn();
          navigation.goBack();
        }}
      />
    ),
  };
};

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
