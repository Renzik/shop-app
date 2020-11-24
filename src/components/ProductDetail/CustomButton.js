import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const CustomButton = ({ onPress, style, children }) => {
  let TouchableComponent = TouchableOpacity;

  Platform.OS === 'android' && Platform.Version >= 21
    ? (TouchableComponent = TouchableNativeFeedback)
    : null;

  return (
    <TouchableComponent onPress={onPress} style={styles.container}>
      <View style={{ ...styles.innerContainer, ...style }}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#999999',
    elevation: 3,
  },
  text: {
    fontSize: 15,
    fontFamily: 'poppins-regular',
  },
});

export default CustomButton;