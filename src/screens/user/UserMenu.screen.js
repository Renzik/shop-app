import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SearchBar from '../../components/SearchBar';

const UserMenu = ({ navigation }) => {
  const [color, setColor] = useState('#222');

  const navigateTo = routeName =>
    navigation.navigate({
      routeName: `${routeName}`,
    });

  return (
    <ScrollView style={styles.container}>
      <Pressable
        onPressIn={() => setColor('#FF9E00')}
        onPress={() => navigateTo('Orders')}
        onPressOut={() => setColor('#222')}>
        <Text style={{ ...styles.menuItem, color: color || '#222' }}>Your Orders</Text>
      </Pressable>
      <Pressable
        onPressIn={() => setColor('#FF9E00')}
        onPress={() => navigateTo('UserProducts')}
        onPressOut={() => setColor('#222')}>
        <Text style={{ ...styles.menuItem, color: color }}>Your Products</Text>
      </Pressable>
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
    paddingHorizontal: '15%',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  menuItem: {
    fontFamily: 'poppins-regular',
    fontSize: 22,
    paddingVertical: 15,
    // color: '#222',
  },
  // menuItemClicked: {
  //   color:  ,
  //   fontFamily: 'poppins-regular',
  //   fontSize: 22,
  //   paddingVertical: 15,
  // },
});

export default UserMenu;
