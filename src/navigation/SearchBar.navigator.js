import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchResults from '../screens/shop/SearchResults.screen';

const SearchBarNavigator = createStackNavigator({ SearchResults: SearchResults });

export default SearchBarNavigator;
