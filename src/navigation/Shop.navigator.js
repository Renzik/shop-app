import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Theme from '../../constants/Theme';

// import Cart from '../screens/shop/Cart.screen'
// import Orders from '../screens/shop/Orders.screen'
import ProductDetail from '../screens/shop/ProductDetail.screen';
import ProductsOverview from '../screens/shop/ProductsOverview.screen';
import SearchResults from '../screens/shop/SearchResults.screen';

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
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Theme.orange,
      },
      headerTintColor: Theme.black,
      headerTitleStyle: {
        display: 'none',
      },
    },
  }
);

export default createAppContainer(ProductsNavigator);
