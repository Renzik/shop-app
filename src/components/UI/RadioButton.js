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
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: Dimensions.get('screen').width,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 1,
    // borderColor: '#ACACAC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    height: 10,
    width: 10,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'black',
    fontFamily: 'poppins-regular',
    fontSize: 18,
    marginLeft: 35,
  },
});
