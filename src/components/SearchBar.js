import React, { useState } from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { SearchBar } from 'react-native-elements';

const SearchBox = ({ navigation }) => {
  const [searchInput, setSearchInput] = useState('');

  const onSubmit = () => {
    setSearchInput('');
    return navigation.navigate({
      routeName: 'SearchResults',
      params: {
        input: searchInput,
      },
    });
  };

  return (
    <SearchBar
      containerStyle={styles.container}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.textInput}
      searchIcon={{ size: 24, color: 'black' }}
      onChangeText={input => setSearchInput(input)}
      onSubmitEditing={() => onSubmit()}
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
    shadowRadius: 6,
    shadowColor: '#555',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 5,
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
