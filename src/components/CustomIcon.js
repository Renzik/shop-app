import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const CustomIcon = ({ name, style, onShare, imageUrl }) => {
  console.log('imageUrl', imageUrl);
  return (
    <View style={styles.iconContainer}>
      <Entypo
        onPress={() => onShare(imageUrl)}
        style={{ ...style, ...styles.icon }}
        name={name}
        size={20}
        color='gray'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    alignSelf: 'flex-end',
  },
  icon: {
    color: 'grey',
  },
});

export default CustomIcon;
