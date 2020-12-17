import React, { useEffect, useCallback, useReducer } from 'react';
import { StyleSheet, Text, View, Alert, KeyboardAvoidingView } from 'react-native';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import logger from 'use-reducer-logger';

import { addNewProduct, editProduct } from '../../redux/actions/products.actions';
import Input from '../../components/UI/Input';

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

  const [formState, dispatchFormState] = useReducer(logger(formReducer), {
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

  const inputChangeHandler = useCallback(
    (inputName, inputValue, inputValidity) => {
      dispatchFormState({
        type: formReducerActions.FORM_INPUT_UPDATE,
        payload: { value: inputValue, isValid: inputValidity, input: inputName },
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior='padding' keyboardVerticalOffset='100'>
      <ScrollView>
        <View style={styles.form}>
          <Input
            label='Title'
            errorText='Please enter a valid title.'
            keyboardType='default'
            autoCapitalize='sentences'
            autoCorrect
            onInputChange={inputChangeHandler}
            required
            initialValue={editedProduct ? editedProduct.title : ''}
            initiallyValid={!!editedProduct}
          />

          <Input
            label='Image URL'
            errorText='Please enter a valid image url.'
            keyboardType='default'
            autoCorrect
            required
            onInputChange={inputChangeHandler}
            initialValue={editedProduct ? editedProduct.images[0] : ''}
            initiallyValid={!!editedProduct}
          />

          {editedProduct ? null : (
            <Input
              label='Price'
              errorText='Please enter a price greater than 0'
              keyboardType='decimal-pad'
              onInputChange={inputChangeHandler}
              required
              min={0.1}
            />
          )}
          <Input
            label='Description'
            errorText='Please enter a valid description.'
            keyboardType='default'
            autoCapitalize='sentences'
            autoCorrect
            multiline
            numberOfLine={3}
            onInputChange={inputChangeHandler}
            initialValue={editedProduct ? editedProduct.description : ''}
            initiallyValid={!!editedProduct}
            required
            minLength={5}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
});
