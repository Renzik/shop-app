import React, { useEffect, useCallback, useReducer } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { addNewProduct, editProduct } from '../../redux/actions/products.actions';

const formReducerActions = {
  FORM_INPUT_UPDATE: 'FORM_INPUT_UPDATE',
};

const formReducer = (state, action) => {
  if (action.type === formReducerActions.FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.payload.input]: action.payload.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.payload.input]: action.payload.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    console.log(updatedFormIsValid);
    return {
      formIsValid: updatedFormIsValid,
      inputValues: updatedValues,
      inputValidities: updatedValidities,
    };
  }
  return state;
};

const EditProduct = ({ navigation }) => {
  const itemId = navigation.getParam('itemId');

  const editedProduct = useSelector(({ products }) =>
    products.userProducts.find(item => item.id === itemId)
  );

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: editedProduct ? editedProduct.title : '',
      imageUrl: editedProduct ? editedProduct.images[0] : '',
      description: editedProduct ? editedProduct.description : '',
      price: '',
    },
    inputValidities: {
      title: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false,
    },
    formIsValid: editedProduct ? true : false,
  });

  const submitHandler = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong Input!', 'Some input is invalid, try again.');
      return;
    }

    editedProduct
      ? dispatch(
          editProduct(
            itemId,
            formState.inputValues.title,
            formState.inputValues.imageUrl,
            formState.inputValues.description
          )
        )
      : dispatch(
          addNewProduct(
            formState.inputValues.title,
            formState.inputValues.imageUrl,
            formState.inputValues.description,
            +formState.inputValues.price
          )
        );
    navigation.goBack();
  }, [dispatch, itemId, formState]);

  useEffect(() => {
    navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  const textChangeHandler = (inputName, text) => {
    let isValid = false;
    if (text.trim().length > 0) isValid = true;

    dispatchFormState({
      type: formReducerActions.FORM_INPUT_UPDATE,
      payload: { value: text, isValid, input: inputName },
    });
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={formState.inputValues.title}
            onChangeText={text => textChangeHandler('title', text)}
            keyboardType='default'
            autoCapitalize='sentences'
            autoCorrect
            // returnKeyType='next'
          />
          {!formState.inputValidities.title && <Text>Please enter a valid title</Text>}
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={formState.inputValues.imageUrl}
            onChangeText={text => textChangeHandler('imageUrl', text)}
          />
        </View>
        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={formState.inputValues.price}
              onChangeText={text => textChangeHandler('price', text)}
              keyboardType='decimal-pad'
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={formState.inputValues.description}
            onChangeText={text => textChangeHandler('description', text)}
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
      <AntDesign style={{ marginRight: 15 }} name='check' size={25} onPress={submitFn} />
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
