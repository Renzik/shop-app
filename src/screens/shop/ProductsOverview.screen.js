import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ItemList from '../../components/ItemList';
import SearchBar from '../../components/SearchBar';
import { fetchProducts } from '../../redux/actions/products.actions';

const ProductsOverview = ({ navigation }) => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <ItemList itemData={products} navigation={navigation} />;
};

ProductsOverview.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <SearchBar style={{ width: Dimensions.get('screen').width * 0.95 }} navigation={navigation} />
    ),
  };
};

export default ProductsOverview;
