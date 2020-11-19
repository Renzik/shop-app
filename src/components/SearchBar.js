import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchBox = ({ navigation, style }) => {
  const [searchInput, setSearchInput] = useState('');
  const [clearIcon, setClearIcon] = useState(true);

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
      containerStyle={{ ...styles.container, ...style }}
      inputContainerStyle={styles.inputContainer}
      inputStyle={styles.textInput}
      searchIcon={{ size: 24, color: 'black' }}
      clearIcon={clearIcon}
      onChangeText={input => setSearchInput(input)}
      onSubmitEditing={() => {
        setClearIcon(false);
        return onSubmit();
      }}
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
