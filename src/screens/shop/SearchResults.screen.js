import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import { Icon } from 'react-native-elements';

import SearchResultsItemList from '../../components/SearchResultsItemList';
import SearchBar from '../../components/SearchBar';

const SearchResults = ({ navigation }) => {
  const items = useSelector(state => state.products.availableProducts);
  const searchInput = navigation.getParam('input');

  const filteredItem = items.filter(item =>
    item.title.toLowerCase().split(' ').includes(searchInput.toLowerCase())
  );

  return filteredItem.length ? (
    <>
      <View style={styles.resultsContainer}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.subTitle}>
          Price and other details may vary based on size and color
        </Text>
      </View>
      <SearchResultsItemList itemData={filteredItem} navigation={navigation} />
    </>
  ) : searchInput === 'newSearch' ? (
    <View style={styles.container}>
      <Text style={styles.text}>Search for your favorite curtains</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>Apologies, we couldn't find any product related to</Text>
      <Text style={styles.text}>{searchInput}</Text>
    </View>
  );
};

SearchResults.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <Icon
      containerStyle={{ paddingHorizontal: 15 }}
      name='arrow-back'
      onPress={() => navigation.goBack()}
    />
  ),

  headerRight: () => (
    <SearchBar style={{ width: Dimensions.get('screen').width * 0.85 }} navigation={navigation} />
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  resultsContainer: {
    padding: 15,
  },
  text: {
    color: '#666',
    fontSize: 15,
    fontFamily: 'poppins-regular',
  },
  title: {
    fontSize: 17,
    fontFamily: 'poppins-regular',
    paddingBottom: 5,
  },
  subTitle: {
    fontSize: 14,
    color: '#555',
  },
});

export default SearchResults;
