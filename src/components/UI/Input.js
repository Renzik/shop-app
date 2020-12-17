import React, { useReducer, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import logger from 'use-reducer-logger';

const inputActions = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  INPUT_BLUR: 'INPUT_BLUR',
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case inputActions.INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };

    case inputActions.INPUT_BLUR:
      return { ...state, touched: true };
    default:
      return state;
  }
};

const Input = props => {
  const { onInputChange, label } = props;

  const [inputState, dispatch] = useReducer(logger(inputReducer), {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false,
  });

  useEffect(() => {
    if (inputState.touched || inputState.isValid)
      onInputChange(label.toLowerCase(), inputState.value, inputState.isValid);
  }, [inputState, onInputChange, label]);

  const textChangeHandler = text => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let isValid = true;

    if (props.required && text.trim().length === 0) isValid = false;

    if (props.email && !emailRegex.test(text.lowerCase())) isValid = false;

    if (props.min != null && +text < props.min) isValid = false;

    if (props.max != null && +text > props.max) isValid = false;

    if (props.minLength != null && text.length < props.minLength) isValid = false;

    if (props.maxLength != null && text.length > props.maxLength) isValid = false;

    dispatch({ type: inputActions.INPUT_CHANGE, value: text, isValid });
  };

  const lostFocusHandler = () => {
    dispatch({ type: inputActions.INPUT_BLUR });
  };

  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        style={styles.input}
        value={inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  formControl: {
    paddingVertical: 15,
    width: '100%',
  },
  label: {
    fontFamily: 'poppins-bold',
    marginVertical: 8,
    fontSize: 16,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    fontFamily: 'poppins-regular',
    fontSize: 14,
    color: 'red',
  },
});
