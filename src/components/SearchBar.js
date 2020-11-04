import React, { useState } from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { SearchBar } from 'react-native-elements';

import ItemList from '../components/ItemList';

const SearchBox = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');
  const items = useSelector(state => state.products.availableProducts);
  console.log(searchInput);

  const onSubmit = input => {
    const filteredItem = items.filter(item =>
      item.title.toLowerCase().split(' ').includes(input.toLowerCase())
    );

    // navigation.navigate({routeName: 'SearchResults'})

    return <ItemList itemData={filteredItem} navigation={navigation} />;
  };

  return (
    <SearchBar
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.textInput}
      searchIcon={{ size: 24, color: 'black' }}
      onChangeText={input => setSearchInput(input)}
      onSubmitEditing={() => onSubmit(searchInput)}
      onClear={() => setSearchInput('')}
      placeholder='Search for curtains'
      placeholderTextColor='#666'
      value={searchInput}
      returnKeyType='search'
      lightTheme={true}
    />
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.85,
    height: Platform.OS === 'android' ? '75%' : '85%',
    paddingHorizontal: 0,
    marginHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: 'transparent',
  },
  textInput: {
    color: 'black',
    fontFamily: 'poppins-regular',
    fontSize: 15,
  },
});
