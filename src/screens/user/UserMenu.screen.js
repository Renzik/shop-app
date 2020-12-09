import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar';

const UserMenu = ({ navigation }) => {
  const navigateTo = routeName =>
    navigation.navigate({
      routeName: `${routeName}`,
    });

  return (
    <ScrollView style={styles.container}>
      <Pressable
        children={({ pressed }) => (
          <Text style={{ color: pressed ? '#FF9E00' : '#222', ...styles.menuItem }}>
            Your Orders
          </Text>
        )}
        onPress={() => navigateTo('Orders')}
      />

      <Pressable
        children={({ pressed }) => (
          <Text style={{ color: pressed ? '#FF9E00' : '#222', ...styles.menuItem }}>
            Your Products
          </Text>
        )}
        onPress={() => navigateTo('UserProducts')}></Pressable>
    </ScrollView>
  );
};

UserMenu.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <SearchBar style={{ width: Dimensions.get('screen').width * 0.95 }} navigation={navigation} />
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  menuItem: {
    fontFamily: 'poppins-regular',
    fontSize: 22,
    paddingVertical: 15,
    paddingHorizontal: '15%',
  },
});

export default UserMenu;
