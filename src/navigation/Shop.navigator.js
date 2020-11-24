import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';

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

const tabScreenConfig = {
  Products: {
    screen: ProductsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <AntDesign name='home' size={25} color={tabInfo.tintColor} />;
      },
    },
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <AntDesign name='shoppingcart' size={25} color={tabInfo.tintColor} />;
      },
    },
  },
};

const BottomNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator(tabScreenConfig);

export default createAppContainer(BottomNavigator);
