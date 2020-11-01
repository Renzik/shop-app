import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Theme from '../../constants/Theme';

// import Cart from '../screens/shop/Cart.screen'
// import Orders from '../screens/shop/Orders.screen'
import ProductDetail from '../screens/shop/ProductDetail.screen';
import ProductsOverview from '../screens/shop/ProductsOverview.screen';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: ProductsOverview,
    },
    ProductDetail: {
      screen: ProductDetail,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? Theme.black : Theme.orange,
      },
      headerTintColor: Platform.OS === 'ios' ? Theme.orange : Theme.black,
    },
  }
);

export default createAppContainer(ProductsNavigator);
