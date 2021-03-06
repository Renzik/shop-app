import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Feather, AntDesign, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';

import Theme from '../../constants/Theme';

import ProductDetail from '../screens/shop/ProductDetail.screen';
import ProductsOverview from '../screens/shop/ProductsOverview.screen';
import SearchResults from '../screens/shop/SearchResults.screen';
import Cart from '../screens/shop/Cart.screen';
import Orders from '../screens/orders/Orders.screen';
import User from '../screens/user/User.screen';
import OrdersFilters from '../screens/orders/OrdersFilter.screen';
import OrdersFilterResults from '../screens/orders/OrdersFilterResults.screen';
import UserMenu from '../screens/user/UserMenu.screen';
import UserProducts from '../screens/user/UserProducts.screen';
import EditProduct from '../screens/user/EditProduct.screen';

const defaultOptions = {
  headerStyle: {
    backgroundColor: Theme.orange,
    height: Platform.OS === 'ios' ? 75 : 80,
    shadowColor: 'transparent',
    elevation: 0,
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
      navigationOptions: {
        safeAreaInsets: { bottom: 0, top: 23 },
      },
    },
    ProductDetail: {
      screen: ProductDetail,
      navigationOptions: {
        safeAreaInsets: { bottom: 0, top: 23 },
      },
    },
    SearchResults: SearchResults,
  },
  { defaultNavigationOptions: defaultOptions }
);

const CartNavigator = createStackNavigator(
  {
    Cart: {
      screen: Cart,
      navigationOptions: {
        safeAreaInsets: { bottom: 0, top: 23 },
      },
    },
    ProductDetail: ProductDetail,
    SearchResults: {
      screen: SearchResults,
      navigationOptions: {
        safeAreaInsets: { bottom: 0, top: 23 },
      },
    },
  },
  { defaultNavigationOptions: defaultOptions }
);

const UserNavigator = createStackNavigator(
  {
    User: {
      screen: User,
    },
    Orders: {
      screen: Orders,
      navigationOptions: {
        safeAreaInsets: { bottom: 0, top: 23 },
      },
    },
    OrdersFilters: {
      screen: OrdersFilters,
    },
    OrdersFilterResults: OrdersFilterResults,
    SearchResults: {
      screen: SearchResults,
      navigationOptions: {
        safeAreaInsets: { bottom: 0, top: 23 },
      },
    },
  },
  { defaultNavigationOptions: defaultOptions }
);

const UserMenuNavigator = createStackNavigator(
  {
    UserMenu: {
      screen: UserMenu,
      navigationOptions: {
        safeAreaInsets: { bottom: 0, top: 23 },
      },
    },
    Orders: {
      screen: Orders,
      navigationOptions: {
        safeAreaInsets: { bottom: 0, top: 23 },
      },
    },
    OrdersFilters: {
      screen: OrdersFilters,
    },
    OrdersFilterResults: OrdersFilterResults,
    UserProducts: {
      screen: UserProducts,
      // navigationOptions: {
      //   headerTitle: () => <Text style={{ fontSize: 18 }}>Your Products</Text>,
      // },
    },
    EditProduct: {
      screen: EditProduct,
    },
    SearchResults: {
      screen: SearchResults,
      navigationOptions: {
        safeAreaInsets: { bottom: 0, top: 23 },
      },
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
      // tabBarOnPress: ({ navigation }) => navigation.navigate('ProductsOverview'),
    },
  },
  UserOptions: {
    screen: UserNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <FontAwesome name='user-o' size={23} color={tabInfo.tintColor} />;
      },
    },
  },
  Cart: {
    screen: CartNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <AntDesign name='shoppingcart' size={26.5} color={tabInfo.tintColor} />;
      },
    },
  },
  UserMenu: {
    screen: UserMenuNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => <Feather name='menu' size={25} color={tabInfo.tintColor} />,
      // tabBarOnPress: ({ navigation }) => goBack(navigation),
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
