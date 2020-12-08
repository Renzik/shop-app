import { Fontisto } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Dimensions } from 'react-native';

const RadioButton = ({ options, onPress, setSelectedRb, selectedRb }) => {
  return (
    <View>
      {options.map(option => {
        return (
          <View key={option.key} style={styles.container}>
            <Text style={styles.text}>{option.text}</Text>
            <TouchableOpacity
              onPress={() => {
                setSelectedRb(option.key);
                onPress(false);
              }}
              style={styles.circle}>
              {selectedRb === option.key ? <View style={styles.checkedCircle} /> : null}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: '#FF9E00',
  },
  text: {
    color: 'black',
    fontFamily: 'poppins-regular',
    fontSize: 18,
    marginLeft: 25,
  },
});
