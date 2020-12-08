import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

const CustomButton = ({ onPress, style, children, textStyles, disabled }) => {
  let TouchableComponent = TouchableOpacity;

  Platform.OS === 'android' && Platform.Version >= 21
    ? (TouchableComponent = TouchableNativeFeedback)
    : null;

  return (
    <TouchableComponent disabled={disabled} onPress={onPress} style={styles.container}>
      {disabled ? (
        <View style={styles.disabledContainer}>
          <Text style={{ ...styles.text, ...textStyles }}>{children}</Text>
        </View>
      ) : (
        <View style={{ ...styles.innerContainer, ...style }}>
          <Text style={{ ...styles.text, ...textStyles }}>{children}</Text>
        </View>
      )}
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
    fontSize: 14,
    fontFamily: 'poppins-regular',
  },
  disabledContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#ccc',
    elevation: 3,
    backgroundColor: '#ccc',
  },
});

export default CustomButton;
