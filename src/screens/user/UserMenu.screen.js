import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import SearchBar from '../../components/SearchBar';

const UserMenu = ({ navigation }) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

UserMenu.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <SearchBar style={{ width: Dimensions.get('screen').width * 0.95 }} navigation={navigation} />
    ),
  };
};

export default UserMenu;

const styles = StyleSheet.create({});
