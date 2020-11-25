import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, MaterialIcons, AntDesign, SimpleLineIcons } from '@expo/vector-icons';

import Theme from '../../constants/Theme';

import ProductDetail from '../screens/shop/ProductDetail.screen';
import ProductsOverview from '../screens/shop/ProductsOverview.screen';
import SearchResults from '../screens/shop/SearchResults.screen';
import Cart from '../screens/shop/Cart.screen';

const defaultOptions = {
  headerStyle: {
    backgroundColor: Theme.orange,
  },
  headerTintColor: Theme.black,
  headerTitleStyle: {
    display: 'none',
  },
  headerMode: 'none',
};

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: ProductsOverview,
    },
    ProductDetail: {
      screen: ProductDetail,
    },
    SearchResults: SearchResults,
  },
  { defaultNavigationOptions: defaultOptions }
);

const CartNavigator = createStackNavigator(
  {
    Cart: {
      screen: Cart,
    },
    SearchResults: SearchResults,
    ProductDetail: {
      screen: ProductDetail,
    },
  },
  { defaultNavigationOptions: defaultOptions }
);

const tabScreenConfig = {
  Products: {
    screen: ProductsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <SimpleLineIcons name='home' size={23} color={tabInfo.tintColor} />;
      },
    },
  },
  Cart: {
    screen: CartNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <AntDesign name='shoppingcart' size={27} color={tabInfo.tintColor} />;
      },
    },
  },
};

const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        labeled: false,
        barStyle: { backgroundColor: 'white' },
        activeColor: Theme.orange,
        inactiveColor: 'black',
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          showLabel: false,
          activeTintColor: Theme.orange,
          inactiveTintColor: 'black',
        },
      });

export default createAppContainer(BottomNavigator);
