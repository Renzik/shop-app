import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import Orders from '../shop/Orders.screen';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import SearchBar from '../../components/SearchBar';

const User = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['rgba(255,158,0,0.9989423076923077)', 'rgba(255,158,0,0.3589423076923077)']}
        style={styles.userHelloContainer}>
        <View style={styles.userSalute}>
          <Text style={styles.userSaluteText}>Hello there,</Text>
          <Text style={{ ...styles.userSaluteText, fontFamily: 'poppins-bold' }}>User</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: 60, height: 60 }}
            source={require('../../../assets/default.png')}
          />
        </View>
      </LinearGradient>
      {/* <Button title='orders' onPress={() => navigation.navigate('Orders')} /> */}
    </View>
  );
};

User.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>LOGO</Text>
      </View>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Search'
          iconName='search1'
          onPress={() =>
            navigation.navigate({ routeName: 'SearchResults', params: { input: 'newSearch' } })
          }
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userHelloContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  userSalute: {},
  userSaluteText: {
    fontFamily: 'poppins-regular',
    fontSize: 24,
  },
  imageContainer: {
    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#fff',
    backgroundColor: '#ccc',
    overflow: 'hidden',
  },
  logoContainer: {
    left: 10,
  },
  logo: {
    color: 'black',
  },
});

export default User;
