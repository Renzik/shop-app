import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ProductsNavigator from './Shop.navigator';
import SearchBarNavigator from '../navigation/SearchBar.navigator';

const defaultOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Theme.orange,
    },
    headerTintColor: Theme.black,
    headerTitleStyle: {
      display: 'none',
    },
  },
};

const MainNavigator = createStackNavigator(
  {
    Products: ProductsNavigator,
    SearchResults: SearchBarNavigator,
  },
  defaultOptions
);

export default createAppContainer(MainNavigator);
