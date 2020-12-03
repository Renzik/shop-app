import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { LinearGradient } from 'expo-linear-gradient';

import Orders from '../shop/Orders.screen';
import CustomHeaderButton from '../../components/UI/CustomHeaderButton';
import SearchBar from '../../components/SearchBar';
import { TouchableOpacity } from 'react-native-gesture-handler';

const User = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['rgba(255,158,0,1)', 'rgba(255,158,0,0.34937700964630225)']}
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
        <View style={styles.ordersOptions}>
          <Text style={styles.ordersOptionsText}>Your Orders</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
            <LinearGradient
              style={styles.yourOrdersBuyAgainImageContainer}
              colors={['rgba(255,192,81,0.70068506006006)', 'rgba(251,171,126,0.70068506006006)']}>
              <Image
                style={{ width: 120, height: 120 }}
                source={require('../../../assets/orders-box.png')}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.ordersOptions}>
          <Text style={styles.ordersOptionsText}>Buy Again</Text>
          <LinearGradient
            style={styles.yourOrdersBuyAgainImageContainer}
            colors={[
              'rgba(251,171,126,0.7967811561561562)',
              'rgba(255,192,81,0.7667511261261262)',
            ]}>
            <Image
              style={{ width: 150, height: 150 }}
              source={require('../../../assets/buy-again.png')}
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
    color: '#333',
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
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  yourOrdersBuyAgainImageContainer: {
    width: 185,
    height: 185,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  ordersOptions: {},
  ordersOptionsText: {
    fontFamily: 'poppins-bold',
    fontSize: 18,
    color: '#333',
    paddingBottom: 15,
  },
});

export default User;
