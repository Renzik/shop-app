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
        <View style={styles.userImage}>
          <Image
            style={{ width: 60, height: 60 }}
            source={require('../../../assets/default.png')}
          />
        </View>
      </LinearGradient>
      <View style={styles.middleContainer}>
        <View style={styles.yourOrders}>
          <Text>Your Orders</Text>
          <LinearGradient
            style={styles.yourOrdersBuyAgainImageContainer}
            colors={['rgba(255,192,81,0.70068506006006)', 'rgba(251,171,126,0.70068506006006)']}>
            <Image
              style={{ width: 125, height: 125 }}
              source={require('../../../assets/orders-box.png')}
            />
          </LinearGradient>
        </View>
        <View style={styles.buyAgain}>
          <Text>Your Orders</Text>
          <LinearGradient
            style={styles.yourOrdersBuyAgainImageContainer}
            colors={[
              'rgba(251,171,126,0.7967811561561562)',
              'rgba(255,192,81,0.7667511261261262)',
            ]}>
            <Image
              style={{ width: 125, height: 125 }}
              source={require('../../../assets/orders-box.png')}
            />
          </LinearGradient>
        </View>
      </View>
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
  userImage: {
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
  middleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  yourOrdersBuyAgainImageContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yourOrders: {
    borderWidth: 1,
  },
});

export default User;
