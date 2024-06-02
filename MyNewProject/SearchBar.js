import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Icon name="search" size={20} color="#888" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    margin: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  searchInput: {
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
  },
});

export default SearchBar;
